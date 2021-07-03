import { css } from '~/css';

type FontFamilyType = {
  fontFamily?: string;
  fontStyle?: string;
};

const fontFamilyStyle = (props: FontFamilyType) => {
  const { fontFamily = 'Ubuntu', fontStyle = 'normal' } = props;

  const styleString = css`
    font-family: ${fontFamily};
    font-style: ${fontStyle};
  `;

  return styleString;
};

export { fontFamilyStyle };
