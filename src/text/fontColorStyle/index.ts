import { getRGBA } from '@solariera/rgba-model/src';
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
  const rgba: string = getRGBA(fontColor, fontColorAlpha);

  const styleString = css`
    color: ${rgba};
  `;

  return styleString;
};

export { fontColorStyle };
