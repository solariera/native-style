"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorderStyle = void 0;
const getBorderStyle = (type) => {
    switch (type) {
        case 'solid':
            return 'solid';
        case 'dotted':
            return 'dotted';
        case 'dashed':
            return 'dashed';
        default:
            return 'solid';
    }
};
exports.getBorderStyle = getBorderStyle;
