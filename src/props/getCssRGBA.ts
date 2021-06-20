import { getRGBA } from '../functions/getRGBA';

const getCssRGBA = (colorName: string, alpha?: number): string => {
  return getRGBA(colorName, alpha);
};

export { getCssRGBA };
