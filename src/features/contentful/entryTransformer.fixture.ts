import { EntryTransformer } from "./entryTransformer";

class EntryTransformerFixture implements EntryTransformer<string> {
  // eslint-disable-next-line class-methods-use-this
  transform(entry: unknown): string {
    return JSON.stringify(entry);
  }
}

export const entryTransformerFixture = new EntryTransformerFixture();
