"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleStyle = void 0;
const css_1 = require("../../css");
const scaleStyle = (props) => {
    const { scale, scaleY, origin = 'center' } = props;
    if (scale === undefined)
        return (0, css_1.css) ``;
    const styleString = (0, css_1.css) `
    transform: scale(${scale}, ${scaleY || scale}); /* Equal to scaleX(2) scaleY(0.5) */
    transform-origin: ${origin};
  `;
    return styleString;
};
exports.scaleStyle = scaleStyle;
