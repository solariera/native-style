"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCursorType = void 0;
const getCursorType = (type) => {
    switch (type) {
        case 'auto':
            return 'auto';
        case 'default':
            return 'default';
        case 'none':
            return 'none';
        case 'context-menu':
            return 'context-menu';
        case 'help':
            return 'help';
        case 'pointer':
            return 'pointer';
        case 'progress':
            return 'progress';
        case 'wait':
            return 'wait';
        case 'cell':
            return 'cell';
        case 'crosshair':
            return 'crosshair';
        case 'text':
            return 'text';
        case 'vertical-text':
            return 'vertical-text';
        case 'alias':
            return 'alias';
        case 'copy':
            return 'copy';
        case 'no-drop':
            return 'no-drop';
        case 'not-allowed':
            return 'not-allowed';
        case 'grab':
            return 'grab';
        case 'grabbing':
            return 'grabbing';
        case 'col-resize':
            return 'col-resize';
        case 'row-resize':
            return 'row-resize';
        case 'n-resize':
            return 'n-resize';
        case 'e-resize':
            return 'e-resize';
        case 's-resize':
            return 's-resize';
        case 'w-resize':
            return 'w-resize';
        case 'ne-resize':
            return 'ne-resize';
        case 'nw-resize':
            return 'nw-resize';
        case 'se-resize':
            return 'se-resize';
        case 'sw-resize':
            return 'sw-resize';
        case 'ew-resize':
            return 'ew-resize';
        case 'ns-resize':
            return 'ns-resize';
        case 'nesw-resize':
            return 'nesw-resize';
        case 'nwse-resize':
            return 'nwse-resize';
        case 'zoom-in':
            return 'zoom-in';
        case 'zoom-out':
            return 'zoom-out';
        default:
            return undefined;
    }
};
exports.getCursorType = getCursorType;
