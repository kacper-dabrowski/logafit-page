import { byOrder } from "./sorting";

describe("sorting by order prop", () => {
  it("should sort by order prop", () => {
    expect([{ order: 2 }, { order: 1 }, { order: 3 }].sort(byOrder)).toEqual([
      { order: 1 },
      { order: 2 },
      { order: 3 },
    ]);
  });
});
