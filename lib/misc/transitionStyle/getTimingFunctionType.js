"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimingFunctionType = void 0;
const getTimingFunctionType = (type) => {
    switch (type) {
        case 'ease':
            return 'ease';
        case 'linear':
            return 'linear';
        case 'ease-in':
            return 'ease-in';
        case 'ease-out':
            return 'ease-out';
        case 'ease-in-out':
            return 'ease-in-out';
        default:
            return undefined;
    }
};
exports.getTimingFunctionType = getTimingFunctionType;
