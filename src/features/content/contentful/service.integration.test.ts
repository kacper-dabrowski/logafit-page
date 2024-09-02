import { ContentfulContentService } from "./service";

describe("fetching content with contentful", () => {
  let instance: ContentfulContentService;

  beforeEach(() => {
    instance = new ContentfulContentService();
  });

  it("should fetch pages correctly and map them to the correct format", async () => {
    const pages = await instance.getPages();
    const { content, ...rest } = pages[0];

    expect(rest).toMatchSnapshot();
    expect(content).toEqual(expect.any(Object));
  });
});
