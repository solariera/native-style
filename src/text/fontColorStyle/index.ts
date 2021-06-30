import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type FontColorType = {
  fontColor?: string;
  fontColorAlpha?: number;
};

const fontColorStyle = (props: FontColorType) => {
  const { fontColor = '#000000', fontColorAlpha = 1 } = props;

  /**
   * フォントカラーのrgba形式
   */
  const rgbaSyntax: string = rgba(fontColor, fontColorAlpha);

  const styleString = css`
    color: ${rgbaSyntax};
  `;

  return styleString;
};

export { fontColorStyle };
