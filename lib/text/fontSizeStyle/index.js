"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontSizeStyle = void 0;
const css_1 = require("../../css");
const fontSizeStyle = (props) => {
    const { fontWeight = 400, fontSize = 0.7, unit = 'px' } = props;
    const styleString = css_1.css `
    font-weight: ${fontWeight};
    font-size: ${fontSize + unit};
  `;
    return styleString;
};
exports.fontSizeStyle = fontSizeStyle;
