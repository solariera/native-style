import { css } from '../../css';

type FontWeightType = {
  fontWeight?: number;
  fontStyle?: string;
};

export const fontWeightStyle = (props: FontWeightType) => {
  const { fontWeight = 400, fontStyle = 'normal' } = props;

  const styleString = css`
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
  `;

  return styleString;
};
