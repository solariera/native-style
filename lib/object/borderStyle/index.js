"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const getBorderStyle = (type) => {
    switch (type) {
        case 'solid':
            return 'solid';
        case 'dotted':
            return 'dotted';
        case 'dashed':
            return 'dashed';
        default:
            return 'solid';
    }
};
const borderStyle = (props) => {
    const { borderColor, borderColorAlpha, borderStyle } = props;
    const { borderLeft, borderRight, borderTop, borderBottom } = props;
    const { borderWidth = 0, unit = 'px' } = props;
    if (!borderWidth || !borderColor)
        return css_1.css ``;
    const rgbaSyntax = rgba_syntax_1.rgba(borderColor, borderColorAlpha);
    const type = getBorderStyle(borderStyle);
    const styleString = [borderLeft, borderRight, borderTop, borderBottom].some((enable) => enable)
        ? css_1.css `
        border: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};
      `
        : css_1.css `
        ${borderLeft && `border-left: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderRight && `border-right: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
        ${borderTop && `border-top: ${borderWidth + unit} ${type} ${rgba_syntax_1.rgba};`}
        ${borderBottom && `border-bottom: ${borderWidth + unit} ${borderStyle} ${rgbaSyntax};`}
      `;
    return styleString;
};
exports.borderStyle = borderStyle;