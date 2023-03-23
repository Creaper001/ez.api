export function toRoute(name: string): string {
  const paths = name.split(".");
  const route = paths.join("/");

  return `/${route}`;
}
