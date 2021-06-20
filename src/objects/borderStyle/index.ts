import { css } from 'styled-components/native';

import { getCssRGBA } from '../../props/getCssRGBA';
import { getBorderStyle } from '../../props/getBorderStyle';

type BorderType = {
  width?: number;
  color?: string;
  alpha?: number;
  type?: string;
  leftEnable?: boolean;
  rightEnable?: boolean;
  topEnable?: boolean;
  bottomEnable?: boolean;
  unit?: string;
};

const borderStyle = (props: BorderType) => {
  const { width = 0, color, alpha, type, leftEnable, rightEnable, topEnable, bottomEnable, unit = 'px' } = props;

  if (!width || !color) return css``;

  const colorRgba: string = getCssRGBA(color, alpha);

  const borderStyle: string = getBorderStyle(type);

  const styleString = [leftEnable, rightEnable, topEnable, bottomEnable].some((enable) => enable)
    ? css`
        border: ${width + unit} ${borderStyle} ${colorRgba};
      `
    : css`
        ${leftEnable && `border-left: ${width + unit} ${borderStyle} ${colorRgba};`}
        ${rightEnable && `border-right: ${width + unit} ${borderStyle} ${colorRgba};`}
        ${topEnable && `border-top: ${width + unit} ${borderStyle} ${colorRgba};`}
        ${bottomEnable && `border-bottom: ${width + unit} ${borderStyle} ${colorRgba};`}
      `;

  return styleString;
};

export { borderStyle };
