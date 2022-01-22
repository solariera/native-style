"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWhiteSpace = void 0;
const getWhiteSpace = (type) => {
    switch (type) {
        case 'normal':
            return 'normal';
        case 'nowrap':
            return 'nowrap';
        case 'pre':
            return 'pre';
        case 'pre-wrap':
            return 'pre-wrap';
        case 'pre-line':
            return 'pre-line';
        case 'break-spaces':
            return 'break-spaces';
        default:
            return undefined;
    }
};
exports.getWhiteSpace = getWhiteSpace;
