"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const colorStyle = (props) => {
    const { bgColor, bgColorAlpha = 1 } = props;
    if (bgColor === undefined)
        return css_1.css ``;
    const bgColorRgba = rgba_syntax_1.rgba(bgColor, bgColorAlpha);
    const styleString = css_1.css `
    background-color: ${bgColorRgba};
  `;
    return styleString;
};
exports.colorStyle = colorStyle;
