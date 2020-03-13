import { keys } from '../utils/obj';

export function getBiggestImageInSrcSet<T extends number>(
  listImages: Record<T, string>
): string {
  const biggestImage = Math.max(...keys(listImages)) as T;
  return listImages[biggestImage];
}
