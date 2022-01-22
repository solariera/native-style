"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverflowStyle = void 0;
const getOverflowStyle = (type) => {
    switch (type) {
        case 'visible':
            return 'visible';
        case 'hidden':
            return 'hidden';
        case 'scroll':
            return 'scroll';
        default:
            return 'auto';
    }
};
exports.getOverflowStyle = getOverflowStyle;
