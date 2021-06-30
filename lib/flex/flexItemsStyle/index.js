"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexItemsStyle = void 0;
const css_1 = require("../../css");
const getAlignSelf = (align) => {
    switch (align) {
        case 'auto':
            return 'auto';
        case 'flex-start':
            return 'flex-start';
        case 'flex-end':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'baseline':
            return 'baseline';
        case 'stretch':
            return 'stretch';
        default:
            return undefined;
    }
};
const getFlexBasis = (basis) => {
    if (basis === 'auto')
        return 'auto';
    if (typeof basis === 'number')
        return basis;
    return undefined;
};
const flexItemsStyle = (props) => {
    const { flexItemGrow, flexItemShrink, flexItemBasis, flexItemAlign, flexItemOrder } = props;
    /**
     * flex-basisの値を取得する
     */
    const flexBasis = getFlexBasis(flexItemBasis);
    /**
     * align-selfの値を取得する
     */
    const alignSelf = getAlignSelf(flexItemAlign);
    const styleString = css_1.css `
    ${flexItemGrow !== undefined ? `flex-grow: ${flexItemGrow};` : ``}
    ${flexItemShrink !== undefined ? `flex-shrink: ${flexItemShrink};` : ``}
    ${flexBasis !== undefined ? `flex-basis: ${flexBasis};` : ``}
    ${alignSelf !== undefined ? `align-self: ${alignSelf};` : ``}
    ${flexItemOrder !== undefined ? `order: ${flexItemOrder};` : ``}
  `;
    return styleString;
};
exports.flexItemsStyle = flexItemsStyle;
