"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJustifyContent = void 0;
const getJustifyContent = (justify) => {
    switch (justify) {
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
        default:
            return undefined;
    }
};
exports.getJustifyContent = getJustifyContent;
