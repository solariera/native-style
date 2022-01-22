"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursorStyle = void 0;
const css_1 = require("../../css");
const getCursorType_1 = require("./getCursorType");
const cursorStyle = (props) => {
    const { cursor } = props;
    /**
     * cursorの値を取得する
     */
    const cursorType = (0, getCursorType_1.getCursorType)(cursor);
    const styleString = (0, css_1.css) `
    ${cursorType !== undefined ? `cursor: ${cursorType};` : ``}
  `;
    return styleString;
};
exports.cursorStyle = cursorStyle;
