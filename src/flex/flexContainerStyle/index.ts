import { css } from '../../css';

type AlignContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';

const getAlignContent = (align?: string): AlignContentType | undefined => {
  switch (align) {
    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'space-between':
      return 'space-between' as const;

    case 'space-around':
      return 'space-around' as const;

    case 'stretch':
      return 'stretch' as const;

    default:
      return undefined;
  }
};

type AlignItemType = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

const getAlignItems = (align?: string): AlignItemType | undefined => {
  switch (align) {
    case 'flex-start': {
      return 'flex-start' as const;
    }

    case 'flex-end': {
      return 'flex-end' as const;
    }

    case 'center': {
      return 'center' as const;
    }

    case 'baseline': {
      return 'baseline' as const;
    }

    case 'stretch': {
      return 'stretch' as const;
    }

    default: {
      return undefined;
    }
  }
};

type JustifyContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

const getJustifyContent = (justify?: string): JustifyContentType | undefined => {
  switch (justify) {
    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'space-between':
      return 'space-between' as const;

    case 'space-around':
      return 'space-around' as const;

    default:
      return undefined;
  }
};

type FlexContainerType = {
  justify?: string;
  align?: string;
  items?: string;
};

/**
 * flexContainerStyle
 * フレックスボックスのコンテナ側のスタイル
 * @param justify itemsの横方向の整列を指定
 * @param align 縦方向にitemをどのように配置していくかを指定
 * @param items itemsの縦方向の整列を指定
 */
const flexContainerStyle = (props: FlexContainerType) => {
  const { justify, align, items } = props;

  /**
   * justify-contentの値
   */
  const justifyContent = getJustifyContent(justify);

  /**
   * align-contentの値
   */
  const alignContent = getAlignContent(align);

  /**
   * align-items
   */
  const alignItems = getAlignItems(items);

  const styleString = css`
    ${justifyContent !== undefined ? `justify-content: ${justifyContent};` : ``}
    ${alignContent !== undefined ? `align-content: ${alignContent};` : ``}
    ${alignItems !== undefined ? `align-items: ${alignItems};` : ``}
  `;

  return styleString;
};

export { flexContainerStyle };
