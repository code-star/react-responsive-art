export enum ImageType {
  jpeg = 'jpeg',
  jp2 = 'jp2',
  webp = 'webp',
}

export type EfficientImageSize =
  | 228
  | 288
  | 472
  | 576
  | 720
  | 960
  | 1146
  | 1472
  | 1680
  | 1920;

export type ResponsiveImageSrcSet<
  ImageSize extends number = EfficientImageSize
> = Record<ImageType, Record<ImageSize, string>>;
