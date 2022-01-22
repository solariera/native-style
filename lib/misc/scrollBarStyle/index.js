"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollBarStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const getMsScrollBarType_1 = require("./getMsScrollBarType");
const getScrollBarWidthType_1 = require("./getScrollBarWidthType");
const scrollBarStyle = (props) => {
    const { scrollBarWidth, scrollBarHeight, scrollBarColor, scrollBarColorAlpha, scrollBarThumbColor, scrollBarThumbColorAlpha, scrollBarUnit = 'px', msScrollBar, ffScrollBar, } = props;
    const scrollBarRgba = scrollBarColor ? (0, rgba_syntax_1.rgba)(scrollBarColor, scrollBarColorAlpha) : undefined;
    const scrollBarThumbRgba = scrollBarThumbColor ? (0, rgba_syntax_1.rgba)(scrollBarThumbColor, scrollBarThumbColorAlpha) : undefined;
    const msScrollBarType = (0, getMsScrollBarType_1.getMsScrollBarType)(msScrollBar);
    const ffScrollBarType = (0, getScrollBarWidthType_1.getScrollBarWidthType)(ffScrollBar);
    const styleString = (0, css_1.css) `
    ${ffScrollBarType ? `scrollbar-width: ` + ffScrollBarType + `;` : ``}
    ${msScrollBarType ? `-ms-overflow-style: ` + msScrollBarType + `;` : ``}

    &::-webkit-scrollbar {
      ${scrollBarWidth ? `height: ` + scrollBarWidth + scrollBarUnit + `;` : ``}
      ${scrollBarHeight ? `height: ` + scrollBarHeight + scrollBarUnit + `;` : ``}
      ${scrollBarRgba ? `background-color: ` + scrollBarRgba + `;` : ``}
    }

    &::-webkit-scrollbar-thumb {
      ${scrollBarThumbRgba ? `background-color: ` + scrollBarThumbRgba + `;` : ``}
    }
  `;
    return styleString;
};
exports.scrollBarStyle = scrollBarStyle;
