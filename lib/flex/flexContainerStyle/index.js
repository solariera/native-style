"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexContainerStyle = void 0;
const css_1 = require("../../css");
const getAlignContent = (align) => {
    switch (align) {
        case 'flex-start':
            return 'flex-start';
        case 'flex-end':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'space-between':
            return 'space-between';
        case 'space-around':
            return 'space-around';
        case 'stretch':
            return 'stretch';
        default:
            return undefined;
    }
};
const getAlignItems = (align) => {
    switch (align) {
        case 'flex-start': {
            return 'flex-start';
        }
        case 'flex-end': {
            return 'flex-end';
        }
        case 'center': {
            return 'center';
        }
        case 'baseline': {
            return 'baseline';
        }
        case 'stretch': {
            return 'stretch';
        }
        default: {
            return undefined;
        }
    }
};
const getJustifyContent = (justify) => {
    switch (justify) {
        case 'flex-start':
            return 'flex-start';
        case 'flex-end':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'space-between':
            return 'space-between';
        case 'space-around':
            return 'space-around';
        default:
            return undefined;
    }
};
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
     * justify-contentの値
     */
    const justify = getJustifyContent(justifyContent);
    /**
     * align-contentの値
     */
    const align = getAlignContent(alignContent);
    /**
     * align-items
     */
    const items = getAlignItems(alignItems);
    const styleString = css_1.css `
    ${justify !== undefined ? `justify-content: ${justify};` : ``}
    ${align !== undefined ? `align-content: ${align};` : ``}
    ${items !== undefined ? `align-items: ${items};` : ``}
  `;
    return styleString;
};
exports.flexContainerStyle = flexContainerStyle;
