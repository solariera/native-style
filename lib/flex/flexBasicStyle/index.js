"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexBasicStyle = void 0;
const css_1 = require("../../css");
const getFlexDirection_1 = require("./getFlexDirection");
const getFlexWrap_1 = require("./getFlexWrap");
const flexBasicStyle = (props) => {
    const { flexDirection, flexWrap, styleDisplay = 'flex' } = props;
    // directionとwrapが存在しなければ何もしない
    if (!flexDirection && !flexWrap)
        return css_1.css ``;
    /**
     * flex-directionの値
     */
    const direction = getFlexDirection_1.getFlexDirection(flexDirection);
    /**
     * flex-wrapの値
     */
    const wrap = getFlexWrap_1.getFlexWrap(flexWrap);
    const styleString = css_1.css `
    ${styleDisplay !== undefined ? `display: ${styleDisplay};` : ``}
    ${direction !== undefined ? `flex-direction: ${direction};` : ``}
    ${wrap !== undefined ? `flex-wrap: ${wrap};` : ``}
  `;
    return styleString;
};
exports.flexBasicStyle = flexBasicStyle;
