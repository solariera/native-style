import { css } from '../../configs/css-in-js';

type MarginType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  unit?: string;
};

const marginStyle = (props: MarginType) => {
  const { left, right, top, bottom, unit = 'px' } = props;

  const styleString = css`
    ${left !== undefined && `margin-left: ${left + unit};`}
    ${right !== undefined && `margin-right: ${right + unit};`}
    ${top !== undefined && `margin-top: ${top + unit};`}
    ${bottom !== undefined && `margin-bottom: ${bottom + unit};`}
  `;

  return styleString;
};

export { marginStyle };
