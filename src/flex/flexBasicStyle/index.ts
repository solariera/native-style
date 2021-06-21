import { css } from '../../css';

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const getFlexDirection = (direction?: string): FlexDirectionType | undefined => {
  switch (direction) {
    case 'row':
      return 'row' as const;

    case 'row-reverse':
      return 'row-reverse' as const;

    case 'column':
      return 'column' as const;

    case 'column-reverse':
      return 'column-reverse' as const;

    default:
      return undefined;
  }
};

type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

const getFlexWrap = (wrap?: string): FlexWrapType | undefined => {
  switch (wrap) {
    case 'nowrap':
      return 'nowrap' as const;

    case 'wrap':
      return 'wrap' as const;

    case 'wrap-reverse':
      return 'wrap-reverse' as const;

    default:
      return undefined;
  }
};

type FlexBasicType = {
  direction?: string;
  wrap?: string;
  display?: string;
};

const flexBasicStyle = (props: FlexBasicType) => {
  const { direction, wrap, display = 'flex' } = props;

  // directionとwrapが存在しなければ何もしない
  if (!direction && !wrap) return css``;

  /**
   * flex-directionの値
   */
  const flexDirection = getFlexDirection(direction);

  /**
   * flex-wrapの値
   */
  const flexWrap = getFlexWrap(wrap);

  const styleString = css`
    ${display !== undefined ? `display: ${display};` : ``}
    ${flexDirection !== undefined ? `flex-direction: ${flexDirection};` : ``}
    ${flexWrap !== undefined ? `flex-wrap: ${flexWrap};` : ``}
  `;

  return styleString;
};

export { flexBasicStyle };
