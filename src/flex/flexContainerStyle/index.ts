import { css } from '../../css';
import { getJustifyContent } from './getJustifyContent';
import { getAlignContent } from './getAlignContent';
import { getAlignItems } from './getAlignItems';

type FlexContainerType = {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
};

/**
 * flexContainerStyle
 * フレックスボックスのコンテナ側のスタイル
 * @param justify itemsの横方向の整列を指定
 * @param align 縦方向にitemをどのように配置していくかを指定
 * @param items itemsの縦方向の整列を指定
 */
export const flexContainerStyle = (props: FlexContainerType) => {
  const { justifyContent, alignContent, alignItems } = props;

  /**
   * justify-content
   */
  const justify = getJustifyContent(justifyContent);

  /**
   * align-content
   */
  const align = getAlignContent(alignContent);

  /**
   * align-items
   */
  const items = getAlignItems(alignItems);

  const styleString = css`
    ${justify !== undefined ? `justify-content: ${justify};` : ``}
    ${align !== undefined ? `align-content: ${align};` : ``}
    ${items !== undefined ? `align-items: ${items};` : ``}
  `;

  return styleString;
};
