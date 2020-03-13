import React, { Fragment } from 'react';
import { keys } from '../utils/obj';
import { ResponsiveImageSrcSet, ImageType } from './ResponsiveImageSrcSet';
import { getBiggestImageInSrcSet } from './getBiggestImageInSrcSet';
import { getSrcSet } from './getSrcSet';
import { renderEither } from '../utils/rendering';

type ResponsiveImageProps<T extends number> = Readonly<{
  alt: string;
  sizes: string;
  srcSet: ResponsiveImageSrcSet<T>;
}>;

const FALLBACK_IMAGE_TYPE: ImageType = ImageType.jpeg;
export const ResponsiveImage = <T extends number>(
  props: ResponsiveImageProps<T>
) => {
  return (
    <picture>
      {keys(props.srcSet).map(imageType => {
        const srcSet = getSrcSet(props.srcSet[imageType]);
        return (
          <Fragment key={imageType}>
            {renderEither(
              imageType === FALLBACK_IMAGE_TYPE,
              <img
                style={{
                  width: '100%',
                }}
                src={getBiggestImageInSrcSet(props.srcSet[FALLBACK_IMAGE_TYPE])}
                alt={props.alt}
                sizes={props.sizes}
                srcSet={srcSet}
              />,
              <source
                type={`image/${imageType}`}
                sizes={props.sizes}
                srcSet={srcSet}
              />
            )}
          </Fragment>
        );
      })}
    </picture>
  );
};
