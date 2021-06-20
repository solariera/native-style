import { css } from '../../css';

type FontFamilyType = {
  family?: string;
  style?: string;
};

const fontFamilyStyle = (props: FontFamilyType) => {
  const { family = 'Ubuntu', style = 'normal' } = props;

  const styleString = css`
    font-family: ${family};
    font-style: ${style};
  `;

  return styleString;
};

export { fontFamilyStyle };
