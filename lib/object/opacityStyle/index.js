"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacityStyle = void 0;
const css_1 = require("../../css");
const opacityStyle = (props) => {
    const { opacity } = props;
    if (opacity === undefined)
        return (0, css_1.css) ``;
    const styleString = (0, css_1.css) `
    opacity: ${opacity};
  `;
    return styleString;
};
exports.opacityStyle = opacityStyle;
