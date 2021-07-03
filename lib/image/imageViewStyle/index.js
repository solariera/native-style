"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageViewStyle = void 0;
const css_1 = require("~/css");
const getBackgroundRepeatMode_1 = require("./getBackgroundRepeatMode");
const imageViewStyle = (props) => {
    const { base64, repeat } = props;
    const mode = getBackgroundRepeatMode_1.getBackgroundRepeatMode(repeat);
    if (mode)
        return css_1.css `
      background-image: url(${base64});
      background-repeat: ${mode};
    `;
    return css_1.css `
    background-image: url(${base64});
  `;
};
exports.imageViewStyle = imageViewStyle;
