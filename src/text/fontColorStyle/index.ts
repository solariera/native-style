import { getRGBA } from '@solariera/rgba-model/src';
import { css } from '../../css';

type FontColorType = {
  color: string;
  alpha: number;
};

const fontColorStyle = (props: FontColorType) => {
  const { color = '#000000', alpha = 1 } = props;

  /**
   * フォントカラーのrgba形式
   */
  const rgba: string = getRGBA(color, alpha);

  const styleString = css`
    color: ${rgba};
  `;

  return styleString;
};

export { fontColorStyle };
