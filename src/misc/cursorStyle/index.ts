import { css } from '../../css';
import { getCursorType } from './getCursorType';

type CursorStyleType = {
  cursor?: string;
};

export const cursorStyle = (props: CursorStyleType) => {
  const { cursor } = props;

  /**
   * cursorの値を取得する
   */
  const cursorType = getCursorType(cursor);

  const styleString = css`
    ${cursorType !== undefined ? `cursor: ${cursorType};` : ``}
  `;

  return styleString;
};
