import { css } from '../../css';

type PaddingType = {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  unit?: string;
};

export const paddingStyle = (props: PaddingType) => {
  const { paddingLeft, paddingRight, paddingTop, paddingBottom, unit = 'px' } = props;

  const styleString = css`
    ${paddingLeft !== undefined && `padding-left: ${paddingLeft + unit};`}
    ${paddingRight !== undefined && `padding-right: ${paddingRight + unit};`}
    ${paddingTop !== undefined && `padding-top: ${paddingTop + unit};`}
    ${paddingBottom !== undefined && `padding-bottom: ${paddingBottom + unit};`}
  `;

  return styleString;
};
