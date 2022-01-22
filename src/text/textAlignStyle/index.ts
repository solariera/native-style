import { css } from '../../css';

type TextAlignType = {
  textAlign?: string;
};

export const textAlignStyle = (props: TextAlignType) => {
  const { textAlign = 'left' } = props;

  const styleString = css`
    text-align: ${textAlign};
  `;

  return styleString;
};
