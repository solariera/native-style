"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgColorStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const bgColorStyle = (props) => {
    const { bgColor, bgColorAlpha = 1 } = props;
    if (bgColor === undefined)
        return (0, css_1.css) ``;
    const bgColorRgba = (0, rgba_syntax_1.rgba)(bgColor, bgColorAlpha);
    const styleString = (0, css_1.css) `
    background-color: ${bgColorRgba};
  `;
    return styleString;
};
exports.bgColorStyle = bgColorStyle;
