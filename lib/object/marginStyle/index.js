"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginStyle = void 0;
const css_1 = require("../../css");
const marginStyle = (props) => {
    const { marginLeft, marginRight, marginTop, marginBottom, unit = 'px' } = props;
    // 全てundefinedであれば「margin: 0」を返す
    if ([marginLeft, marginRight, marginTop, marginBottom].every((enable) => enable === undefined)) {
        const styleString = (0, css_1.css) `
      margin: 0;
    `;
        return styleString;
    }
    const styleString = (0, css_1.css) `
    margin-left: ${(marginLeft !== undefined ? marginLeft : 0) + unit};
    margin-right: ${(marginRight !== undefined ? marginRight : 0) + unit};
    margin-top: ${(marginTop !== undefined ? marginTop : 0) + unit};
    margin-bottom: ${(marginBottom !== undefined ? marginBottom : 0) + unit};
  `;
    return styleString;
};
exports.marginStyle = marginStyle;
