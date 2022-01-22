"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitionStyle = void 0;
const css_1 = require("../../css");
const getTimingFunctionType_1 = require("./getTimingFunctionType");
const transitionStyle = (props) => {
    const { duration, timingFunction, durationUnit = 's' } = props;
    /**
     * transition-timing-functionの値を取得する
     */
    const timingFunctionType = (0, getTimingFunctionType_1.getTimingFunctionType)(timingFunction);
    const styleString = (0, css_1.css) `
    ${duration !== undefined && `transition-duration: ${duration + durationUnit};`}
    ${timingFunctionType !== undefined && `transition-timing-function: ${timingFunctionType};`}
  `;
    return styleString;
};
exports.transitionStyle = transitionStyle;
