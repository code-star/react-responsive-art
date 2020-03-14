import cat_jpeg_228 from './cat_228.jpeg';
import cat_jpeg_288 from './cat_288.jpeg';
import cat_jpeg_472 from './cat_472.jpeg';
import cat_jpeg_576 from './cat_576.jpeg';
import cat_jpeg_720 from './cat_720.jpeg';
import cat_jpeg_960 from './cat_960.jpeg';
import cat_jpeg_1146 from './cat_1146.jpeg';
import cat_jpeg_1472 from './cat_1472.jpeg';
import cat_jpeg_1680 from './cat_1680.jpeg';
import cat_jpeg_1920 from './cat_1920.jpeg';

import cat_webp_228 from './cat_228.webp';
import cat_webp_288 from './cat_288.webp';
import cat_webp_472 from './cat_472.webp';
import cat_webp_576 from './cat_576.webp';
import cat_webp_720 from './cat_720.webp';
import cat_webp_960 from './cat_960.webp';
import cat_webp_1146 from './cat_1146.webp';
import cat_webp_1472 from './cat_1472.webp';
import cat_webp_1680 from './cat_1680.webp';
import cat_webp_1920 from './cat_1920.webp';

import cat_jp2_228 from './cat_228.jp2';
import cat_jp2_288 from './cat_288.jp2';
import cat_jp2_472 from './cat_472.jp2';
import cat_jp2_576 from './cat_576.jp2';
import cat_jp2_720 from './cat_720.jp2';
import cat_jp2_960 from './cat_960.jp2';
import cat_jp2_1146 from './cat_1146.jp2';
import cat_jp2_1472 from './cat_1472.jp2';
import cat_jp2_1680 from './cat_1680.jp2';
import cat_jp2_1920 from './cat_1920.jp2';

import * as React from 'react';
import { ResponsiveImage } from '../../src/ResponsiveImage/ResponsiveImage';

export const CatImage = () => (
  <>
    <ResponsiveImage
      alt="cat"
      sizes="100vw"
      srcSet={{
        jpeg: {
          228: cat_jpeg_228,
          288: cat_jpeg_288,
          472: cat_jpeg_472,
          576: cat_jpeg_576,
          720: cat_jpeg_720,
          960: cat_jpeg_960,
          1146: cat_jpeg_1146,
          1472: cat_jpeg_1472,
          1680: cat_jpeg_1680,
          1920: cat_jpeg_1920,
        },
        webp: {
          228: cat_webp_228,
          288: cat_webp_288,
          472: cat_webp_472,
          576: cat_webp_576,
          720: cat_webp_720,
          960: cat_webp_960,
          1146: cat_webp_1146,
          1472: cat_webp_1472,
          1680: cat_webp_1680,
          1920: cat_webp_1920,
        },
        jp2: {
          228: cat_jp2_228,
          288: cat_jp2_288,
          472: cat_jp2_472,
          576: cat_jp2_576,
          720: cat_jp2_720,
          960: cat_jp2_960,
          1146: cat_jp2_1146,
          1472: cat_jp2_1472,
          1680: cat_jp2_1680,
          1920: cat_jp2_1920,
        },
      }}
    />
  </>
);
