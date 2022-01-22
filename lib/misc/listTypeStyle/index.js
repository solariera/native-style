"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTypeStyle = void 0;
const css_1 = require("../../css");
const getListStyleType_1 = require("./getListStyleType");
const listTypeStyle = (props) => {
    const { listStyleType = 'none' } = props;
    /**
     * list-style-typeの値を取得する
     */
    const type = (0, getListStyleType_1.getListStyleType)(listStyleType);
    const styleString = (0, css_1.css) `
    ${type !== undefined ? `list-style-type: ${type};` : ``}
  `;
    return styleString;
};
exports.listTypeStyle = listTypeStyle;
