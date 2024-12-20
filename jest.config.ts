import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "test-results/coverage",
  reporters: [
    "default",
    [
      "jest-ctrf-json-reporter",
      { outputFile: "results.json", outputDir: "test-results" },
    ],
  ],
};

export default createJestConfig(config);
