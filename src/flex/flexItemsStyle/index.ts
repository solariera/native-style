import { css } from '../../css';
import { getAlignSelf } from './getAlignSelf';
import { getFlexBasis } from './getFlexBasis';

type FlexItemsType = {
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;
  alignSelf?: string;
  order?: number;
};

export const flexItemsStyle = (props: FlexItemsType) => {
  const { flexGrow, flexShrink, flexBasis, alignSelf, order } = props;

  /**
   * flex-basisの値を取得する
   */
  const flexItemBasis = getFlexBasis(flexBasis);

  /**
   * align-selfの値を取得する
   */
  const flexItemAlign = getAlignSelf(alignSelf);

  const styleString = css`
    ${flexGrow !== undefined ? `flex-grow: ${flexGrow};` : ``}
    ${flexShrink !== undefined ? `flex-shrink: ${flexShrink};` : ``}
    ${flexItemBasis !== undefined ? `flex-basis: ${flexItemBasis};` : ``}
    ${flexItemAlign !== undefined ? `align-self: ${flexItemAlign};` : ``}
    ${order !== undefined ? `order: ${order};` : ``}
  `;

  return styleString;
};
