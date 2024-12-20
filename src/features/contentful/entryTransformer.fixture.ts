import { EntityTransformer } from "./entryTransformer";

class EntryTransformerFixture implements EntityTransformer<string> {
  transformMany(entries: unknown[]): string[] {
    return entries.map((entry) => this.transform(entry));
  }

  // eslint-disable-next-line class-methods-use-this
  transform(entry: unknown): string {
    return JSON.stringify(entry);
  }
}

export const entryTransformerFixture = new EntryTransformerFixture();
