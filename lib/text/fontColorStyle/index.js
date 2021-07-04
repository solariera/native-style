"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontColorStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const fontColorStyle = (props) => {
    const { fontColor = '#000000', fontColorAlpha = 1 } = props;
    /**
     * フォントカラーのrgba形式
     */
    const rgbaSyntax = rgba_syntax_1.rgba(fontColor, fontColorAlpha);
    const styleString = css_1.css `
    color: ${rgbaSyntax};
  `;
    return styleString;
};
exports.fontColorStyle = fontColorStyle;
