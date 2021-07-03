"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlexWrap = void 0;
const getFlexWrap = (wrap) => {
    switch (wrap) {
        case 'nowrap':
            return 'nowrap';
        case 'wrap':
            return 'wrap';
        case 'wrap-reverse':
            return 'wrap-reverse';
        default:
            return undefined;
    }
};
exports.getFlexWrap = getFlexWrap;
