import { css } from '../../css';

type LineHeightType = {
  lineHeight?: number;
  unit?: string;
};

export const lineHeightStyle = (props: LineHeightType) => {
  const { lineHeight, unit = 'px' } = props;

  if (lineHeight === undefined) return css``;

  const styleString = css`
    line-height: ${lineHeight + unit};
  `;

  return styleString;
};
