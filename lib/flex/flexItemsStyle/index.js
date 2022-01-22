"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexItemsStyle = void 0;
const css_1 = require("../../css");
const getAlignSelf_1 = require("./getAlignSelf");
const getFlexBasis_1 = require("./getFlexBasis");
const flexItemsStyle = (props) => {
    const { flexGrow, flexShrink, flexBasis, alignSelf, order } = props;
    /**
     * flex-basisの値を取得する
     */
    const flexItemBasis = (0, getFlexBasis_1.getFlexBasis)(flexBasis);
    /**
     * align-selfの値を取得する
     */
    const flexItemAlign = (0, getAlignSelf_1.getAlignSelf)(alignSelf);
    const styleString = (0, css_1.css) `
    ${flexGrow !== undefined ? `flex-grow: ${flexGrow};` : ``}
    ${flexShrink !== undefined ? `flex-shrink: ${flexShrink};` : ``}
    ${flexItemBasis !== undefined ? `flex-basis: ${flexItemBasis};` : ``}
    ${flexItemAlign !== undefined ? `align-self: ${flexItemAlign};` : ``}
    ${order !== undefined ? `order: ${order};` : ``}
  `;
    return styleString;
};
exports.flexItemsStyle = flexItemsStyle;
