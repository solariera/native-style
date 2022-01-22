"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAlignStyle = void 0;
const css_1 = require("../../css");
const textAlignStyle = (props) => {
    const { textAlign = 'left' } = props;
    const styleString = (0, css_1.css) `
    text-align: ${textAlign};
  `;
    return styleString;
};
exports.textAlignStyle = textAlignStyle;
