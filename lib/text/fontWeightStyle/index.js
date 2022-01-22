"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontWeightStyle = void 0;
const css_1 = require("../../css");
const fontWeightStyle = (props) => {
    const { fontWeight = 400, fontStyle = 'normal' } = props;
    const styleString = (0, css_1.css) `
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
  `;
    return styleString;
};
exports.fontWeightStyle = fontWeightStyle;
