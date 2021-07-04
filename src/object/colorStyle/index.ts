import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  bgColor?: string;
  bgColorAlpha?: number;
};

export const colorStyle = (props: ColorType) => {
  const { bgColor, bgColorAlpha = 1 } = props;

  if (bgColor === undefined) return css``;

  const bgColorRgba: string = rgba(bgColor, bgColorAlpha);

  const styleString = css`
    background-color: ${bgColorRgba};
  `;

  return styleString;
};
