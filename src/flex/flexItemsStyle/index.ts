import { css } from '~/css';
import { getAlignSelf } from './getAlignSelf';
import { getFlexBasis } from './getFlexBasis';

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
