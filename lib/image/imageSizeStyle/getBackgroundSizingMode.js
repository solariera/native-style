"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackgroundSizingMode = void 0;
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
exports.getBackgroundSizingMode = getBackgroundSizingMode;
