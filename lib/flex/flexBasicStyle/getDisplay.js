"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplay = void 0;
const getDisplay = (display) => {
    switch (display) {
        case 'flex':
            return 'flex';
        case 'inline-flex':
            return 'inline-flex';
        default:
            return undefined;
    }
};
exports.getDisplay = getDisplay;
