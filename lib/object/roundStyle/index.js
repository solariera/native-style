"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundStyle = void 0;
const css_1 = require("~/css");
const roundStyle = (props) => {
    const { roundSize = 0, unit = 'px' } = props;
    // 角丸サイズが存在し、長さ4の配列であれば角丸サイズを細かく指定する
    if (Array.isArray(roundSize) && roundSize.length === 4) {
        const roundSizeUnits = roundSize.map((round) => (round ? round.toString() : '0' + unit));
        const styleString = css_1.css `
      border-top-left-radius: ${roundSizeUnits[0]};
      border-top-right-radius: ${roundSizeUnits[1]};
      border-bottom-right-radius: ${roundSizeUnits[2]};
      border-bottom-left-radius: ${roundSizeUnits[3]};
    `;
        return styleString;
    }
    /**
     * エラー回避のため、配列でも数値型でもどちらでも取得できるようにする
     */
    const round = Array.isArray(roundSize) ? roundSize[0] : roundSize;
    const styleString = css_1.css `
    ${round > 0 && `border-radius: ${round.toString() + unit};`}
  `;
    return styleString;
};
exports.roundStyle = roundStyle;
