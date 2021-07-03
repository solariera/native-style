"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlignSelf = void 0;
const getAlignSelf = (align) => {
    switch (align) {
        case 'auto':
            return 'auto';
        case 'flex-start':
            return 'flex-start';
        case 'flex-end':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'baseline':
            return 'baseline';
        case 'stretch':
            return 'stretch';
        default:
            return undefined;
    }
};
exports.getAlignSelf = getAlignSelf;
