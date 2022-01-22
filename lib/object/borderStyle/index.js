"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const getBorderStyle_1 = require("./getBorderStyle");
const borderStyle = (props) => {
    const { borderColor, borderColorAlpha, borderStyle } = props;
    const { borderLeft, borderRight, borderTop, borderBottom } = props;
    const { borderWidth = 0, unit = 'px' } = props;
    if (!borderWidth || !borderColor)
        return (0, css_1.css) ``;
    const rgbaSyntax = (0, rgba_syntax_1.rgba)(borderColor, borderColorAlpha);
    const type = (0, getBorderStyle_1.getBorderStyle)(borderStyle);
    const styleString = [borderLeft, borderRight, borderTop, borderBottom].some((enable) => enable)
        ? (0, css_1.css) `
        ${borderLeft && `border-left: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderRight && `border-right: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderTop && `border-top: ${borderWidth + unit} ${type} ${rgba_syntax_1.rgba};`}
        ${borderBottom && `border-bottom: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
      `
        : (0, css_1.css) `
        border: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};
      `;
    return styleString;
};
exports.borderStyle = borderStyle;
