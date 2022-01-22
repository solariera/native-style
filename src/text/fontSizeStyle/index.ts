import { css } from '../../css';

type FontSizeType = {
  fontSize?: number;
  fontUnit?: string;
};

export const fontSizeStyle = (props: FontSizeType) => {
  const { fontSize = 0.7, fontUnit = 'rem' } = props;

  const styleString = css`
    font-size: ${fontSize + fontUnit};
  `;

  return styleString;
};
