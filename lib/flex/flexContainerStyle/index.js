"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexContainerStyle = void 0;
const css_1 = require("../../css");
const getJustifyContent_1 = require("./getJustifyContent");
const getAlignContent_1 = require("./getAlignContent");
const getAlignItems_1 = require("./getAlignItems");
/**
 * flexContainerStyle
 * フレックスボックスのコンテナ側のスタイル
 * @param justify itemsの横方向の整列を指定
 * @param align 縦方向にitemをどのように配置していくかを指定
 * @param items itemsの縦方向の整列を指定
 */
const flexContainerStyle = (props) => {
    const { justifyContent, alignContent, alignItems } = props;
    /**
     * justify-content
     */
    const justify = getJustifyContent_1.getJustifyContent(justifyContent);
    /**
     * align-content
     */
    const align = getAlignContent_1.getAlignContent(alignContent);
    /**
     * align-items
     */
    const items = getAlignItems_1.getAlignItems(alignItems);
    const styleString = css_1.css `
    ${justify !== undefined ? `justify-content: ${justify};` : ``}
    ${align !== undefined ? `align-content: ${align};` : ``}
    ${items !== undefined ? `align-items: ${items};` : ``}
  `;
    return styleString;
};
exports.flexContainerStyle = flexContainerStyle;
