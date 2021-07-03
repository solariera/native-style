"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSizeStyle = void 0;
const css_1 = require("~/css");
const getBackgroundSizingMode = (mode) => {
    switch (mode) {
        case 'auto':
            return 'auto';
        case 'contain':
            return 'contain';
        case 'cover':
            return 'cover';
        default:
            return undefined;
    }
};
const imageSizeStyle = (props) => {
    const { width, height, unit = 'px' } = props;
    const contain = 'contain';
    const cover = 'cover';
    const widthMode = getBackgroundSizingMode(width);
    const heightMode = getBackgroundSizingMode(height);
    // 第一引数がcontainかcoverであればそれらを与えたCSSを返す
    if (widthMode === contain || widthMode === cover)
        return css_1.css `
      background-size: ${widthMode};
    `;
    // 取得した各モードを見て有効値であればそのままプロパティとして使う
    // 無効値であれば型がnumberの場合のみ値を格納して使う
    // そうでなければundefinedを返す
    // TODO heightの場合はcontainとcoverが入ってしまう可能性があるが今は目を瞑る
    const widthProps = widthMode || typeof width === 'number' ? width + unit : undefined;
    const heightProps = heightMode || typeof height === 'number' ? height + unit : undefined;
    // widthもheightもどちらも有効なプロパティの場合
    if (widthProps && heightProps)
        return css_1.css `
      background-size: ${widthProps} ${heightProps};
    `;
    // widthのみ有効な場合
    if (widthProps && !heightProps)
        return css_1.css `
      background-size: ${widthProps};
    `;
    // heightのみ有効な場合
    // TODO このモードが必要かどうかは今後考える
    if (!widthProps && heightProps)
        return css_1.css `
      background-size: ${heightProps};
    `;
    // どちらも有効でない場合は、空を返す
    return css_1.css ``;
};
exports.imageSizeStyle = imageSizeStyle;
