import { z } from "zod";

const defaultSchema = z.unknown();

export interface EntityTransformer<T> {
  transform(entry: unknown): T;
  transformMany(entries: unknown[]): T[];
}

export class SchemaBasedEntityTransformer<T> implements EntityTransformer<T> {
  private schema: z.ZodTypeAny;

  constructor(schema: z.ZodTypeAny = defaultSchema) {
    this.schema = schema;
  }

  transform(entry: unknown): T {
    const validationResult = this.schema.safeParse(entry);

    if (!validationResult.success) {
      throw new Error(
        `Error occurred, when tried to parse entry ${JSON.stringify(validationResult.error.errors)}, object: ${JSON.stringify(entry)}`,
      );
    }

    return validationResult.data;
  }

  transformMany(entries: unknown[]): T[] {
    return entries.map((entry) => this.transform(entry));
  }
}
