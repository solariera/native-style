"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placementStyle = void 0;
const css_1 = require("../../css");
const placementStyle = (props) => {
    const { height, textAlign = 'left', unit = 'px' } = props;
    const styleString = css_1.css `
    ${height !== undefined ? `line-height: ${height + unit};` : ``}
    text-align: ${textAlign};
  `;
    return styleString;
};
exports.placementStyle = placementStyle;
