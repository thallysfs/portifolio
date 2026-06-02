export const BASE_PATH = "/portifolio";

export function withBasePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
