import { getRGBA } from '@solariera/rgba-model/src';

const getCssRGBA = (colorName: string, alpha?: number): string => {
  return getRGBA(colorName, alpha);
};

export { getCssRGBA };
