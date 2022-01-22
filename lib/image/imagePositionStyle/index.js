"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagePositionStyle = void 0;
const css_1 = require("../../css");
const imagePositionStyle = (props) => {
    const { x, y, unit = 'px' } = props;
    if (x && y)
        return (0, css_1.css) `
      background-position-x: ${x.toString() + unit};
      background-position-y: ${y.toString() + unit};
    `;
    if (x && !y)
        return (0, css_1.css) `
      background-position-x: ${x.toString() + unit};
    `;
    if (!x && y)
        return (0, css_1.css) `
      background-position-y: ${y.toString() + unit};
    `;
    return (0, css_1.css) ``;
};
exports.imagePositionStyle = imagePositionStyle;
