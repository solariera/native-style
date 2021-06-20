import { css } from '../../configs/css-in-js';

type PaddingType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  unit?: string;
};

const paddingStyle = (props: PaddingType) => {
  const { left, right, top, bottom, unit = 'px' } = props;

  const styleString = css`
    ${left !== undefined && `padding-left: ${left + unit};`}
    ${right !== undefined && `padding-right: ${right + unit};`}
    ${top !== undefined && `padding-top: ${top + unit};`}
    ${bottom !== undefined && `padding-bottom: ${bottom + unit};`}
  `;

  return styleString;
};

export { paddingStyle };
