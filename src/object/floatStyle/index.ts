import { css } from '../../css';
import { getFloatStyle } from './getFloatStyle';

type FloatType = {
  floatDirection?: string;
};

export const floatStyle = (props: FloatType) => {
  const { floatDirection } = props;

  if (!floatDirection) return css``;

  const direction: string = getFloatStyle(floatDirection);

  const styleString = css`
    float: ${direction};
  `;

  return styleString;
};
