import { z } from "zod";
import { DefaultEntryTransformer } from "./entryTransformer";

const schema = z.object({ required: z.string() });

describe("Entry transformer", () => {
  const transformer = new DefaultEntryTransformer(schema);

  it("should throw, when entry does not match schema", () => {
    expect(() => transformer.transform("sth")).toThrow();
  });

  it("should return transformed entry, when entry matches schema", () => {
    expect(transformer.transform({ required: "value" })).toEqual({
      required: "value",
    });
  });
});
