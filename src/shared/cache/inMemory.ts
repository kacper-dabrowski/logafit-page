import { CacheService } from "./cache";

export class InMemoryCacheService implements CacheService {
  private cache: Map<string, Promise<any>> = new Map();

  async wrap<T>(key: string, fetchingFn: () => Promise<T>): Promise<T> {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    this.cache.set(key, fetchingFn());

    return this.cache.get(key);
  }
}
