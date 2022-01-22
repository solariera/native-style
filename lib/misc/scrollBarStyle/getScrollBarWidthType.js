"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollBarWidthType = void 0;
const getScrollBarWidthType = (type) => {
    switch (type) {
        case 'auto':
            return 'auto';
        case 'none':
            return 'none';
        case 'scrollbar':
            return 'scrollbar';
        case '-ms-autohiding-scrollbar':
            return '-ms-autohiding-scrollbar';
        default:
            return undefined;
    }
};
exports.getScrollBarWidthType = getScrollBarWidthType;
