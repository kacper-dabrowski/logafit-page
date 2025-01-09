import { arrayToObject } from "./toObject";

describe("array to object", () => {
  it("should convert an array to an object", () => {
    expect(arrayToObject(["a", "b", "c"])).toEqual({ 0: "a", 1: "b", 2: "c" });
    expect(arrayToObject([{ a: "b" }, { b: "c" }, { c: "d" }])).toEqual({
      "0": { a: "b" },
      "1": { b: "c" },
      "2": { c: "d" },
    });
  });
});
