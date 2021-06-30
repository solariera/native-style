"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strokeStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const strokeStyle = (props) => {
    const { strokeWidth, strokeColor, strokeColorAlpha } = props;
    /**
     * ストロークカラーのrgba形式
     */
    const textStrokeColor = strokeColor && rgba_syntax_1.rgba(strokeColor, strokeColorAlpha);
    const styleString = css_1.css `
    ${strokeWidth !== undefined ? `text-stroke-width: ${strokeWidth};` : ``}
    ${textStrokeColor !== undefined ? `text-stroke-color: ${textStrokeColor};` : ``}
  `;
    return styleString;
};
exports.strokeStyle = strokeStyle;
