"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlexDirection = void 0;
const getFlexDirection = (direction) => {
    switch (direction) {
        case 'row':
            return 'row';
        case 'row-reverse':
            return 'row-reverse';
        case 'column':
            return 'column';
        case 'column-reverse':
            return 'column-reverse';
        default:
            return undefined;
    }
};
exports.getFlexDirection = getFlexDirection;
