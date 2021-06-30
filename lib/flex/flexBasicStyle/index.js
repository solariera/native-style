"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexBasicStyle = void 0;
const css_1 = require("../../css");
const getFlexDirection = (direction) => {
    switch (direction) {
        case 'row':
            return 'row';
        case 'row-reverse':
            return 'row-reverse';
        case 'column':
            return 'column';
        case 'column-reverse':
            return 'column-reverse';
        default:
            return undefined;
    }
};
const getFlexWrap = (wrap) => {
    switch (wrap) {
        case 'nowrap':
            return 'nowrap';
        case 'wrap':
            return 'wrap';
        case 'wrap-reverse':
            return 'wrap-reverse';
        default:
            return undefined;
    }
};
const flexBasicStyle = (props) => {
    const { flexDirection, flexWrap, styleDisplay = 'flex' } = props;
    // directionとwrapが存在しなければ何もしない
    if (!flexDirection && !flexWrap)
        return css_1.css ``;
    /**
     * flex-directionの値
     */
    const direction = getFlexDirection(flexDirection);
    /**
     * flex-wrapの値
     */
    const wrap = getFlexWrap(flexWrap);
    const styleString = css_1.css `
    ${styleDisplay !== undefined ? `display: ${styleDisplay};` : ``}
    ${direction !== undefined ? `flex-direction: ${direction};` : ``}
    ${wrap !== undefined ? `flex-wrap: ${wrap};` : ``}
  `;
    return styleString;
};
exports.flexBasicStyle = flexBasicStyle;
