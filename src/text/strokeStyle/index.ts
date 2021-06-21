import { getRGBA } from '@solariera/rgba-model/src';
import { css } from '../../css';

type StrokeType = {
  strokeWidth?: number;
  strokeColor?: string;
  strokeColorAlpha?: number;
};

const strokeStyle = (props: StrokeType) => {
  const { strokeWidth, strokeColor, strokeColorAlpha } = props;

  /**
   * ストロークカラーのrgba形式
   */
  const textStrokeColor: string | undefined = strokeColor && getRGBA(strokeColor, strokeColorAlpha);

  const styleString = css`
    ${strokeWidth !== undefined ? `text-stroke-width: ${strokeWidth};` : ``}
    ${textStrokeColor !== undefined ? `text-stroke-color: ${textStrokeColor};` : ``}
  `;

  return styleString;
};

export { strokeStyle };
