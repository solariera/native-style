import { css } from '../../css';
import { getDisplay } from './getDisplay';
import { getFlexDirection } from './getFlexDirection';
import { getFlexWrap } from './getFlexWrap';

type FlexBasicType = {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
};

export const flexBasicStyle = (props: FlexBasicType) => {
  const { display, flexDirection, flexWrap } = props;

  // displayとdirectionとwrapが存在しなければ何もしない
  if (!display && !flexDirection && !flexWrap) return css``;

  /**
   * displayの値
   */
  const displayType = getDisplay(display) || 'flex';

  /**
   * flex-directionの値
   */
  const direction = getFlexDirection(flexDirection);

  /**
   * flex-wrapの値
   */
  const wrap = getFlexWrap(flexWrap);

  const styleString = css`
    ${displayType !== undefined ? `display: ${displayType};` : ``}
    ${direction !== undefined ? `flex-direction: ${direction};` : ``}
    ${wrap !== undefined ? `flex-wrap: ${wrap};` : ``}
  `;

  return styleString;
};
