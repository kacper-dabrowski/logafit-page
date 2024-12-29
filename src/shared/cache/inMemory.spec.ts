import { InMemoryCacheService } from "./inMemory";

describe("InMemoryCacheService", () => {
  let cacheService: InMemoryCacheService;

  beforeEach(() => {
    cacheService = new InMemoryCacheService();
  });

  it("should return cached value if key exists", async () => {
    const key = "testKey";

    const result1 = await cacheService.wrap(key, async () => "value");
    const result2 = await cacheService.wrap(key, async () => "newValue");

    expect(result1).toBe(result2);
  });

  it("should fetch and cache value if key does not exist", async () => {
    const key = "testKey";
    const value = "fetchedValue";
    const fetchingFn = jest.fn().mockResolvedValue(value);

    const result = await cacheService.wrap(key, fetchingFn);

    expect(result).toBe(value);
    expect(fetchingFn).toHaveBeenCalledTimes(1);
  });

  it("should call fetching function only once for the same key", async () => {
    const key = "testKey";
    const value = "fetchedValue";
    const fetchingFn = jest.fn().mockResolvedValue(value);

    await cacheService.wrap(key, fetchingFn);
    await cacheService.wrap(key, fetchingFn);

    expect(fetchingFn).toHaveBeenCalledTimes(1);
  });

  it("should handle concurrent calls for the same key", async () => {
    const key = "testKey";
    const value = "fetchedValue";
    const fetchingFn = jest.fn().mockResolvedValue(value);

    const [result1, result2] = await Promise.all([
      cacheService.wrap(key, fetchingFn),
      cacheService.wrap(key, fetchingFn),
    ]);

    expect(result1).toBe(value);
    expect(result2).toBe(value);
    expect(fetchingFn).toHaveBeenCalledTimes(1);
  });
});
