import { css } from '../../css';

type FontSizeType = {
  fontWeight?: number;
  fontSize?: number;
  unit?: string;
};

export const fontSizeStyle = (props: FontSizeType) => {
  const { fontWeight = 400, fontSize = 0.7, unit = 'px' } = props;

  const styleString = css`
    font-weight: ${fontWeight};
    font-size: ${fontSize + unit};
  `;

  return styleString;
};
