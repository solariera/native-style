import { getRGBA } from '@solariera/rgba-model/src';
import { css } from '../../css';

type ColorType = {
  bgColor?: string;
  bgColorAlpha?: number;
};

const colorStyle = (props: ColorType) => {
  const { bgColor, bgColorAlpha = 1 } = props;

  if (bgColor === undefined) return css``;

  const bgColorRgba: string = getRGBA(bgColor, bgColorAlpha);

  const styleString = css`
    background-color: ${bgColorRgba};
  `;

  return styleString;
};

export { colorStyle };
