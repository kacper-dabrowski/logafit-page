import { AvailableEntity, contentfulClientService } from "../service/service";
import { pageTransformer } from "./page.transformer";

describe("pages", () => {
  it("should return the pages", async () => {
    const pages = await contentfulClientService.getEntries(
      AvailableEntity.Pages,
    );

    const transformedPages = pageTransformer.transformMany(pages);
    expect(transformedPages).toEqual([
      {
        id: "1",
        title: "Page 1",
      },
    ]);
  });
});
