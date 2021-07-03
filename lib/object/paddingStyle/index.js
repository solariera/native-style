"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingStyle = void 0;
const css_1 = require("~/css");
const paddingStyle = (props) => {
    const { paddingLeft, paddingRight, paddingTop, paddingBottom, unit = 'px' } = props;
    const styleString = css_1.css `
    ${paddingLeft !== undefined && `padding-left: ${paddingLeft + unit};`}
    ${paddingRight !== undefined && `padding-right: ${paddingRight + unit};`}
    ${paddingTop !== undefined && `padding-top: ${paddingTop + unit};`}
    ${paddingBottom !== undefined && `padding-bottom: ${paddingBottom + unit};`}
  `;
    return styleString;
};
exports.paddingStyle = paddingStyle;
