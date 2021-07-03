import { css } from '~/css';

type AlignSelfType = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

const getAlignSelf = (align?: string): AlignSelfType | undefined => {
  switch (align) {
    case 'auto':
      return 'auto' as const;

    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'baseline':
      return 'baseline' as const;

    case 'stretch':
      return 'stretch' as const;

    default:
      return undefined;
  }
};

type FlexBasisType = 'auto' | number;

const getFlexBasis = (basis?: string | number): FlexBasisType | undefined => {
  if (basis === 'auto') return 'auto' as const;
  if (typeof basis === 'number') return basis;

  return undefined;
};

type FlexItemsType = {
  flexItemGrow?: number;
  flexItemShrink?: number;
  flexItemBasis?: string | number;
  flexItemAlign?: string;
  flexItemOrder?: number;
};

const flexItemsStyle = (props: FlexItemsType) => {
  const { flexItemGrow, flexItemShrink, flexItemBasis, flexItemAlign, flexItemOrder } = props;

  /**
   * flex-basisの値を取得する
   */
  const flexBasis = getFlexBasis(flexItemBasis);

  /**
   * align-selfの値を取得する
   */
  const alignSelf = getAlignSelf(flexItemAlign);

  const styleString = css`
    ${flexItemGrow !== undefined ? `flex-grow: ${flexItemGrow};` : ``}
    ${flexItemShrink !== undefined ? `flex-shrink: ${flexItemShrink};` : ``}
    ${flexBasis !== undefined ? `flex-basis: ${flexBasis};` : ``}
    ${alignSelf !== undefined ? `align-self: ${alignSelf};` : ``}
    ${flexItemOrder !== undefined ? `order: ${flexItemOrder};` : ``}
  `;

  return styleString;
};

export { flexItemsStyle };
