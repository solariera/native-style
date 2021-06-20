import { css } from 'styled-components/native';
import { getRGBA } from '@solariera/rgba-model/src';

type StrokeType = {
  width?: number;
  color?: string;
  alpha?: number;
};

const strokeStyle = (props: StrokeType) => {
  const { width, color, alpha } = props;

  /**
   * ストロークカラーのrgba形式
   */
  const textStrokeColor: string | undefined = color && getRGBA(color, alpha);

  const styleString = css`
    ${width !== undefined ? `text-stroke-width: ${width};` : ``}
    ${textStrokeColor !== undefined ? `text-stroke-color: ${textStrokeColor};` : ``}
  `;

  return styleString;
};

export { strokeStyle };
