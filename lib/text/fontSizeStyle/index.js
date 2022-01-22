"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontSizeStyle = void 0;
const css_1 = require("../../css");
const fontSizeStyle = (props) => {
    const { fontSize = 0.7, fontUnit = 'rem' } = props;
    const styleString = (0, css_1.css) `
    font-size: ${fontSize + fontUnit};
  `;
    return styleString;
};
exports.fontSizeStyle = fontSizeStyle;
