import { css } from '../../css';
import { getWhiteSpace } from './getWhiteSpace';

type WhiteSpaceType = {
  whiteSpace?: string;
};

export const whiteSpaceStyle = (props: WhiteSpaceType) => {
  const { whiteSpace } = props;

  /**
   * white-spaceの値を取得する
   */
  const whiteSpaceType = getWhiteSpace(whiteSpace);

  const styleString = css`
    ${whiteSpaceType !== undefined ? `white-space: ${whiteSpaceType};` : ``}
  `;

  return styleString;
};
