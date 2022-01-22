import { css } from '../../css';
import { getOverflowStyle } from './getOverflowStyle';

type OverflowType = {
  overflow?: string;
};

export const overflowStyle = (props: OverflowType) => {
  const { overflow } = props;

  if (!overflow) return css``;

  const type: string = getOverflowStyle(overflow);

  const styleString = css`
    overflow: ${type};
  `;

  return styleString;
};
