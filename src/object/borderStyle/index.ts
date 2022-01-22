import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';
import { getBorderStyle } from './getBorderStyle';

type BorderType = {
  borderWidth?: number;
  borderColor?: string;
  borderColorAlpha?: number;
  borderStyle?: string;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  unit?: string;
};

export const borderStyle = (props: BorderType) => {
  const { borderColor, borderColorAlpha, borderStyle } = props;
  const { borderLeft, borderRight, borderTop, borderBottom } = props;
  const { borderWidth = 0, unit = 'px' } = props;

  if (!borderWidth || !borderColor) return css``;

  const rgbaSyntax: string = rgba(borderColor, borderColorAlpha);

  const type: string = getBorderStyle(borderStyle);

  const styleString = [borderLeft, borderRight, borderTop, borderBottom].some((enable) => enable)
    ? css`
        ${borderLeft && `border-left: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderRight && `border-right: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderTop && `border-top: ${borderWidth + unit} ${type} ${rgba};`}
        ${borderBottom && `border-bottom: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
      `
    : css`
        border: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};
      `;

  return styleString;
};
