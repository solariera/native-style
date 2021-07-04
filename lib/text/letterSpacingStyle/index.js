"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterSpacingStyle = void 0;
const css_1 = require("../../css");
const letterSpacingStyle = (props) => {
    const { letterSpacing, unit = 'px' } = props;
    const styleString = css_1.css `
    ${letterSpacing !== undefined ? `letter-spacing: ${letterSpacing + unit};` : ``}
  `;
    return styleString;
};
exports.letterSpacingStyle = letterSpacingStyle;
