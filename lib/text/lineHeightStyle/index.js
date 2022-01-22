"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineHeightStyle = void 0;
const css_1 = require("../../css");
const lineHeightStyle = (props) => {
    const { lineHeight, unit = 'px' } = props;
    if (lineHeight === undefined)
        return (0, css_1.css) ``;
    const styleString = (0, css_1.css) `
    line-height: ${lineHeight + unit};
  `;
    return styleString;
};
exports.lineHeightStyle = lineHeightStyle;
