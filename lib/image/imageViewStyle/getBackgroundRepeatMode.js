"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackgroundRepeatMode = void 0;
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
exports.getBackgroundRepeatMode = getBackgroundRepeatMode;
