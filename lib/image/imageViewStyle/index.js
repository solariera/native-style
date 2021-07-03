"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageViewStyle = void 0;
const css_1 = require("~/css");
const getBackgroundRepeatMode = (mode) => {
    switch (mode) {
        case 'repeat':
            return 'repeat';
        case 'repeat-x':
            return 'repeat-x';
        case 'repeat-y':
            return 'repeat-y';
        case 'no-repeat':
            return 'no-repeat';
        default:
            return undefined;
    }
};
const imageViewStyle = (props) => {
    const { base64, repeat } = props;
    const mode = getBackgroundRepeatMode(repeat);
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
