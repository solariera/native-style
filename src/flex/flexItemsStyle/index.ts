import { css } from '../../css';

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
  grow?: number;
  shrink?: number;
  basis?: string | number;
  align?: string;
  order?: number;
};

const flexItemsStyle = (props: FlexItemsType) => {
  const { grow, shrink, basis, align, order } = props;

  /**
   * flex-basisの値を取得する
   */
  const flexBasis = getFlexBasis(basis);

  /**
   * align-selfの値を取得する
   */
  const alignSelf = getAlignSelf(align);

  const styleString = css`
    ${grow !== undefined ? `flex-grow: ${grow};` : ``}
    ${shrink !== undefined ? `flex-shrink: ${shrink};` : ``}
    ${flexBasis !== undefined ? `flex-basis: ${flexBasis};` : ``}
    ${alignSelf !== undefined ? `align-self: ${alignSelf};` : ``}
    ${order !== undefined ? `order: ${order};` : ``}
  `;

  return styleString;
};

export { flexItemsStyle };
