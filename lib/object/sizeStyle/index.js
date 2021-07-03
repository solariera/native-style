"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeStyle = void 0;
const css_1 = require("~/css");
const sizeStyle = (props) => {
    const { width, height, unit = 'px' } = props;
    const styleString = css_1.css `
    ${width !== undefined && `width: ${width + unit};`}
    ${height !== undefined && `height: ${height + unit};`}
  `;
    return styleString;
};
exports.sizeStyle = sizeStyle;
