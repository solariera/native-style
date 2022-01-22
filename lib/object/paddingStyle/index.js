"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingStyle = void 0;
const css_1 = require("../../css");
const paddingStyle = (props) => {
    const { paddingLeft, paddingRight, paddingTop, paddingBottom, unit = 'px' } = props;
    // 全てundefinedであれば「margin: 0」を返す
    if ([paddingLeft, paddingRight, paddingTop, paddingBottom].every((enable) => enable === undefined)) {
        const styleString = (0, css_1.css) `
      padding: 0;
    `;
        return styleString;
    }
    const styleString = (0, css_1.css) `
    padding-left: ${(paddingLeft !== undefined ? paddingLeft : 0) + unit};
    padding-right: ${(paddingRight !== undefined ? paddingRight : 0) + unit};
    padding-top: ${(paddingTop !== undefined ? paddingTop : 0) + unit};
    padding-bottom: ${(paddingBottom !== undefined ? paddingBottom : 0) + unit};
  `;
    return styleString;
};
exports.paddingStyle = paddingStyle;
