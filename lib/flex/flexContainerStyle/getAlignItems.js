"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlignItems = void 0;
const getAlignItems = (align) => {
    switch (align) {
        case 'flex-start': {
            return 'flex-start';
        }
        case 'flex-end': {
            return 'flex-end';
        }
        case 'center': {
            return 'center';
        }
        case 'baseline': {
            return 'baseline';
        }
        case 'stretch': {
            return 'stretch';
        }
        default: {
            return undefined;
        }
    }
};
exports.getAlignItems = getAlignItems;
