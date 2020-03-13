import { entries } from '../utils/obj';

export const getSrcSet = <ImageSize extends number>(
  listImages: Record<ImageSize, string>
): string => {
  return entries(listImages)
    .map(([size, image]) => `${image} ${size}w`)
    .join(', ');
};
