import { css } from '../../configs/css-in-js';

type PositionType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  unit?: string;
};

const positionStyle = (props: PositionType) => {
  const { left, right, top, bottom, unit = 'px' } = props;

  if ([left, right, top, bottom].every((pos) => pos === undefined)) return css``;

  const styleString = css`
    position: absolute;
    ${left !== undefined && `left: ${left + unit};`}
    ${right !== undefined && `right: ${right + unit};`}
    ${top !== undefined && `top: ${top + unit};`}
    ${bottom !== undefined && `bottom: ${bottom + unit};`}
  `;

  return styleString;
};

export { positionStyle };
