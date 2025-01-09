import { deduplicateArray } from "./deduplicate";

describe("array deduplicate", () => {
  it("should remove duplicates from an array", () => {
    expect(
      deduplicateArray([1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 9, 9]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
