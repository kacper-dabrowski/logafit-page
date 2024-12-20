import { createClient } from "contentful";
import { mockDeep } from "jest-mock-extended";

export const contentfulClientMock = mockDeep<ReturnType<typeof createClient>>();
