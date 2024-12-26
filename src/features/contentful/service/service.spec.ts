import { createClient } from "contentful";
import { contentfulClientMock } from "./contentful.client.mock";
import { AvailableEntity, ContentfulClientService } from "./service";
import { InMemoryCacheService } from "../../../shared/cache/inMemory";

jest.mock("contentful");

describe("siema", () => {
  let contentfulClientService: ContentfulClientService;
  beforeEach(() => {
    jest.mocked(createClient).mockReturnValue(contentfulClientMock);
    givenContentfulReturnsValues();

    contentfulClientService = new ContentfulClientService(
      new InMemoryCacheService(),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch the content from contentful", async () => {
    expect(
      await contentfulClientService.getEntries(AvailableEntity.FeaturedVenues),
    ).toEqual([{ key: "value" }]);

    expect(contentfulClientMock.getEntries).toHaveBeenCalledWith({
      content_type: AvailableEntity.FeaturedVenues,
    });
  });

  it("should not fetch twice", async () => {
    await contentfulClientService.getEntries(AvailableEntity.FeaturedVenues);

    expect(contentfulClientMock.getEntries).toHaveBeenCalledTimes(1);
  });
});

function givenContentfulReturnsValues() {
  contentfulClientMock.getEntries.mockResolvedValue({
    items: [{ fields: { key: "value" } }],
  } as any);
}
