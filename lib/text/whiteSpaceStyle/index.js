"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whiteSpaceStyle = void 0;
const css_1 = require("../../css");
const getWhiteSpace_1 = require("./getWhiteSpace");
const whiteSpaceStyle = (props) => {
    const { whiteSpace } = props;
    /**
     * white-spaceの値を取得する
     */
    const whiteSpaceType = (0, getWhiteSpace_1.getWhiteSpace)(whiteSpace);
    const styleString = (0, css_1.css) `
    ${whiteSpaceType !== undefined ? `white-space: ${whiteSpaceType};` : ``}
  `;
    return styleString;
};
exports.whiteSpaceStyle = whiteSpaceStyle;
