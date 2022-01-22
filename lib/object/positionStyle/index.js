"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionStyle = void 0;
const css_1 = require("../../css");
const positionStyle = (props) => {
    const { position = 'absolute', left, right, top, bottom, unit = 'px' } = props;
    if ([left, right, top, bottom].every((pos) => pos === undefined))
        return (0, css_1.css) ``;
    const styleString = (0, css_1.css) `
    position: ${position};
    ${left !== undefined && `left: ${left + unit};`}
    ${right !== undefined && `right: ${right + unit};`}
    ${top !== undefined && `top: ${top + unit};`}
    ${bottom !== undefined && `bottom: ${bottom + unit};`}
  `;
    return styleString;
};
exports.positionStyle = positionStyle;
