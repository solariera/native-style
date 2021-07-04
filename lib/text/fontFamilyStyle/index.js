"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontFamilyStyle = void 0;
const css_1 = require("../../css");
const fontFamilyStyle = (props) => {
    const { fontFamily = 'Ubuntu', fontStyle = 'normal' } = props;
    const styleString = css_1.css `
    font-family: ${fontFamily};
    font-style: ${fontStyle};
  `;
    return styleString;
};
exports.fontFamilyStyle = fontFamilyStyle;
