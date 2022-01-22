"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blurStyle = void 0;
const css_1 = require("../../css");
const blurStyle = (props) => {
    const { blur, unit = 'px' } = props;
    if (blur === undefined)
        return (0, css_1.css) ``;
    const styleString = (0, css_1.css) `
    backdrop-filter: blur(${blur + unit});
  `;
    return styleString;
};
exports.blurStyle = blurStyle;
