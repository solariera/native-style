"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexBasicStyle = void 0;
const css_1 = require("../../css");
const getDisplay_1 = require("./getDisplay");
const getFlexDirection_1 = require("./getFlexDirection");
const getFlexWrap_1 = require("./getFlexWrap");
const flexBasicStyle = (props) => {
    const { display, flexDirection, flexWrap } = props;
    // displayとdirectionとwrapが存在しなければ何もしない
    if (!display && !flexDirection && !flexWrap)
        return (0, css_1.css) ``;
    /**
     * displayの値
     */
    const displayType = (0, getDisplay_1.getDisplay)(display) || 'flex';
    /**
     * flex-directionの値
     */
    const direction = (0, getFlexDirection_1.getFlexDirection)(flexDirection);
    /**
     * flex-wrapの値
     */
    const wrap = (0, getFlexWrap_1.getFlexWrap)(flexWrap);
    const styleString = (0, css_1.css) `
    ${displayType !== undefined ? `display: ${displayType};` : ``}
    ${direction !== undefined ? `flex-direction: ${direction};` : ``}
    ${wrap !== undefined ? `flex-wrap: ${wrap};` : ``}
  `;
    return styleString;
};
exports.flexBasicStyle = flexBasicStyle;
