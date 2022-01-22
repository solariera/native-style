"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloatStyle = void 0;
const getFloatStyle = (type) => {
    switch (type) {
        case 'none':
            return 'none';
        case 'left':
            return 'left';
        case 'right':
            return 'right';
        default:
            return 'none';
    }
};
exports.getFloatStyle = getFloatStyle;
