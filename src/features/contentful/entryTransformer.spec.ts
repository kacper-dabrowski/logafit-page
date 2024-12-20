import { z } from "zod";
import { EntryTransformer } from "./entryTransformer";

const schema = z.object({ required: z.string() });

describe("Entry transformer", () => {
  const transformer = new EntryTransformer(schema);

  it("should throw, when entry does not match schema", () => {
    expect(() => transformer.transform("sth")).toThrow();
  });

  it("should return transformed entry, when entry matches schema", () => {
    expect(transformer.transform({ required: "value" })).toEqual({
      required: "value",
    });
  });

  it("should allow to transform many entries at once", () => {
    expect(
      transformer.transformMany([
        { required: "value1" },
        { required: "value2" },
      ]),
    ).toEqual([{ required: "value1" }, { required: "value2" }]);
  });

  it("should throw, when any of the entries does not match schema", () => {
    expect(() =>
      transformer.transformMany(["sth", { required: "value" }]),
    ).toThrow();
  });
});
