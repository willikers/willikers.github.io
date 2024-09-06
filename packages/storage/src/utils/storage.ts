export interface StorageObject {
  key: string;
  data: string;
}

export const getItem = (storage: typeof localStorage | typeof sessionStorage, key: string) => {
  const val = storage.getItem(key) ?? 'null';
  try {
    const parsed = JSON.parse(val);
    return typeof parsed === 'string' ? val : parsed;
  } catch {
    return val;
  }
};
