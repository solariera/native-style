"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlignContent = void 0;
const getAlignContent = (align) => {
    switch (align) {
        case 'flex-start':
            return 'flex-start';
        case 'flex-end':
            return 'flex-end';
        case 'center':
            return 'center';
        case 'space-between':
            return 'space-between';
        case 'space-around':
            return 'space-around';
        case 'stretch':
            return 'stretch';
        default:
            return undefined;
    }
};
exports.getAlignContent = getAlignContent;
