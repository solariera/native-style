import { css } from '../../configs/css-in-js';

import { getCssRGBA } from '../../props/getCssRGBA';

type ColorType = {
  bgColor?: string;
  bgColorAlpha: number;
};

const colorStyle = (props: ColorType) => {
  const { bgColor, bgColorAlpha = 1 } = props;

  if (bgColor === undefined) return css``;

  const bgColorRgba: string = getCssRGBA(bgColor, bgColorAlpha);

  const styleString = css`
    background-color: ${bgColorRgba};
  `;

  return styleString;
};

export { colorStyle };
