import { css } from '../../css';

type PositionType = {
  position?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  unit?: string;
};

export const positionStyle = (props: PositionType) => {
  const { position = 'absolute', left, right, top, bottom, unit = 'px' } = props;

  if ([left, right, top, bottom].every((pos) => pos === undefined)) return css``;

  const styleString = css`
    position: ${position};
    ${left !== undefined && `left: ${left + unit};`}
    ${right !== undefined && `right: ${right + unit};`}
    ${top !== undefined && `top: ${top + unit};`}
    ${bottom !== undefined && `bottom: ${bottom + unit};`}
  `;

  return styleString;
};
