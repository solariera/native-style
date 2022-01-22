"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListStyleType = void 0;
const getListStyleType = (type) => {
    switch (type) {
        case 'none':
            return 'none';
        case 'disc':
            return 'disc';
        case 'circle':
            return 'circle';
        case 'square':
            return 'square';
        case 'lower-roman':
            return 'lower-roman';
        case 'upper-roman':
            return 'upper-roman';
        case 'lower-greek':
            return 'lower-greek';
        case 'decimal':
            return 'decimal';
        case 'decimal-leading-zero':
            return 'decimal-leading-zero';
        case 'lower-latin':
            return 'lower-latin';
        case 'lower-alpha':
            return 'lower-alpha';
        case 'upper-latin':
            return 'upper-latin';
        case 'upper-alpha':
            return 'upper-alpha';
        case 'cjk-ideographic':
            return 'cjk-ideographic';
        case 'hiragana':
            return 'hiragana';
        case 'katakana':
            return 'katakana';
        case 'hiragana-iroha':
            return 'hiragana-iroha';
        case 'katakana-iroha':
            return 'katakana-iroha';
        case 'hebrew':
            return 'hebrew';
        case 'armenian':
            return 'armenian';
        case 'georgian':
            return 'georgian';
        default:
            return undefined;
    }
};
exports.getListStyleType = getListStyleType;
