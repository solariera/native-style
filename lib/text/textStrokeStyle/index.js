"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textStrokeStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const textStrokeStyle = (props) => {
    const { strokeWidth, strokeColor, strokeColorAlpha, unit = 'px' } = props;
    /**
     * ストロークカラーのrgba形式
     */
    const textStrokeColor = strokeColor && (0, rgba_syntax_1.rgba)(strokeColor, strokeColorAlpha);
    const styleString = (0, css_1.css) `
    ${strokeWidth !== undefined ? `text-stroke-width: ${strokeWidth + unit};` : ``}
    ${textStrokeColor !== undefined ? `text-stroke-color: ${textStrokeColor};` : ``}
  `;
    return styleString;
};
exports.textStrokeStyle = textStrokeStyle;
