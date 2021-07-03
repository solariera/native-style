"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexItemsStyle = void 0;
const css_1 = require("~/css");
const getAlignSelf_1 = require("./getAlignSelf");
const getFlexBasis_1 = require("./getFlexBasis");
const flexItemsStyle = (props) => {
    const { flexItemGrow, flexItemShrink, flexItemBasis, flexItemAlign, flexItemOrder } = props;
    /**
     * flex-basisの値を取得する
     */
    const flexBasis = getFlexBasis_1.getFlexBasis(flexItemBasis);
    /**
     * align-selfの値を取得する
     */
    const alignSelf = getAlignSelf_1.getAlignSelf(flexItemAlign);
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
