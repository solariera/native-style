"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontFamilyStyle = void 0;
const css_1 = require("../../css");
const fontFamilyStyle = (props) => {
    const { fontFamily, fontStyle = 'normal' } = props;
    const styleString = (0, css_1.css) `
    ${fontFamily !== undefined && `font-family: ${fontFamily};`}
    font-style: ${fontStyle};
  `;
    return styleString;
};
exports.fontFamilyStyle = fontFamilyStyle;
