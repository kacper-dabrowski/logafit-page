import { z } from "zod";
import { SchemaBasedEntityTransformer } from "../entryTransformer";

export interface CompanyData {
  companyName: string;
  nameAndSurname: string;
  address: string;
  bankName: string;
  nipNumber: string;
  bankAccountNumber: string;
}

const companyDataSchema = z.object({
  companyName: z.string(),
  nameAndSurname: z.string(),
  address: z.string(),
  bankName: z.string(),
  nipNumber: z.string(),
  bankAccountNumber: z.string(),
});

export const companyDataTransformer =
  new SchemaBasedEntityTransformer<CompanyData>(companyDataSchema);
