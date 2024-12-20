export interface CacheService {
  wrap<T>(key: string, fetchingFn: () => Promise<T>): Promise<T>;
}
