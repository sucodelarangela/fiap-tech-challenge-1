export class StorageService {
  private getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public clear(): void {
    localStorage.clear();
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public getData<T>(key: string): T | null {
    return this.getItem<T>(key);
  }

  public saveData<T>(key: string, data: T): void {
    this.setItem(key, data);
  }
}
