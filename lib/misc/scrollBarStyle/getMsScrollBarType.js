"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsScrollBarType = void 0;
const getMsScrollBarType = (type) => {
    switch (type) {
        case 'auto':
            return 'auto';
        case 'none':
            return 'none';
        case 'thin':
            return 'thin';
        default:
            return undefined;
    }
};
exports.getMsScrollBarType = getMsScrollBarType;
