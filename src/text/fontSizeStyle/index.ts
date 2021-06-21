import { css } from '../../css';

type FontSizeType = {
  weight?: number;
  size?: number;
  unit?: string;
};

const fontSizeStyle = (props: FontSizeType) => {
  const { weight = 400, size = 0.7, unit = 'px' } = props;

  const styleString = css`
    font-weight: ${weight};
    font-size: ${size + unit};
  `;

  return styleString;
};

export { fontSizeStyle };
