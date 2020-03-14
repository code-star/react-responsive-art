import React from 'react';
import { ResponsiveImageSrcSet, ImageType } from './ResponsiveImageSrcSet';
import { getBiggestImageInSrcSet } from './getBiggestImageInSrcSet';
import { getSrcSet } from './getSrcSet';

export type ResponsiveImageProps<T extends number> = Readonly<{
  alt: string;
  sizes: string;
  srcSet: ResponsiveImageSrcSet<T>;
}>;

export const ResponsiveImage = <T extends number>(
  props: ResponsiveImageProps<T>
) => {
  return (
    <picture>
      {/* Order by efficiency */}

      <source
        type={`image/${ImageType.webp}`}
        sizes={props.sizes}
        srcSet={getSrcSet(props.srcSet.webp)}
      />

      <source
        type={`image/${ImageType.jp2}`}
        sizes={props.sizes}
        srcSet={getSrcSet(props.srcSet.jp2)}
      />

      <img
        style={{
          width: '100%',
        }}
        src={getBiggestImageInSrcSet(props.srcSet.jpeg)}
        alt={props.alt}
        sizes={props.sizes}
        srcSet={getSrcSet(props.srcSet.jpeg)}
      />
    </picture>
  );
};
