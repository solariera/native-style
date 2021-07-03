"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlexBasis = void 0;
const getFlexBasis = (basis) => {
    if (basis === 'auto')
        return 'auto';
    if (typeof basis === 'number')
        return basis;
    return undefined;
};
exports.getFlexBasis = getFlexBasis;
