"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginStyle = void 0;
const css_1 = require("../../css");
const marginStyle = (props) => {
    const { marginLeft, marginRight, marginTop, marginBottom, unit = 'px' } = props;
    const styleString = css_1.css `
    ${marginLeft !== undefined && `margin-left: ${marginLeft + unit};`}
    ${marginRight !== undefined && `margin-right: ${marginRight + unit};`}
    ${marginTop !== undefined && `margin-top: ${marginTop + unit};`}
    ${marginBottom !== undefined && `margin-bottom: ${marginBottom + unit};`}
  `;
    return styleString;
};
exports.marginStyle = marginStyle;
