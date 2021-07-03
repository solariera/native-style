import { css } from '~/css';

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
