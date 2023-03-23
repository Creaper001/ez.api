export async function getImport<T>(path: string): Promise<T> {
  const { default: element } = await import(path);

  return element as T;
}
