import React from 'react';

const NextGenImgsWithFallback = ({
  srcWebP,
  srcJPX,
  alt,
  fallbackSrc,
  mediaType1 = 'image/webp',
  mediaType2 = 'image/jpx',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={srcWebP} type={mediaType1} />
      <source srcSet={srcJPX} type={mediaType2} />
      <img src={fallbackSrc} alt={alt} {...delegated} />
    </picture>
  );
};

export default NextGenImgsWithFallback;