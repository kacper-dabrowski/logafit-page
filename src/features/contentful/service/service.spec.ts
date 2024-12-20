import { createClient } from "contentful";
import { entryTransformerFixture } from "../entryTransformer.fixture";
import { contentfulClientMock } from "./contentful.client.mock";
import { ContentfulClientService } from "./service";

jest.mock("contentful");

describe("siema", () => {
  beforeEach(() => {
    jest.mocked(createClient).mockReturnValue(contentfulClientMock);
    givenContentfulReturnsValues();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch the content from contentful and transform it with given transformer", async () => {
    const client = new ContentfulClientService();

    expect(await client.getEntries(entryTransformerFixture)).toEqual([
      '{"fields":{"key":"value"}}',
    ]);
  });

  it("should not fetch twice", async () => {
    const client = new ContentfulClientService();

    await client.getEntries(entryTransformerFixture);
    await client.getEntries(entryTransformerFixture);

    expect(contentfulClientMock.getEntries).toHaveBeenCalledTimes(1);
  });
});

function givenContentfulReturnsValues() {
  contentfulClientMock.getEntries.mockResolvedValue({
    items: [{ fields: { key: "value" } }],
  } as any);
}
