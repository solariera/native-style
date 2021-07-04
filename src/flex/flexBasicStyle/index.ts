import { css } from '../../css';
import { getFlexDirection } from './getFlexDirection';
import { getFlexWrap } from './getFlexWrap';

type FlexBasicType = {
  flexDirection?: string;
  flexWrap?: string;
  styleDisplay?: string;
};

export const flexBasicStyle = (props: FlexBasicType) => {
  const { flexDirection, flexWrap, styleDisplay = 'flex' } = props;

  // directionとwrapが存在しなければ何もしない
  if (!flexDirection && !flexWrap) return css``;

  /**
   * flex-directionの値
   */
  const direction = getFlexDirection(flexDirection);

  /**
   * flex-wrapの値
   */
  const wrap = getFlexWrap(flexWrap);

  const styleString = css`
    ${styleDisplay !== undefined ? `display: ${styleDisplay};` : ``}
    ${direction !== undefined ? `flex-direction: ${direction};` : ``}
    ${wrap !== undefined ? `flex-wrap: ${wrap};` : ``}
  `;

  return styleString;
};
