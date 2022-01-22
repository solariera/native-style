type CursorType =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'zoom-in'
  | 'zoom-out';

export const getCursorType = (type?: string): CursorType | undefined => {
  switch (type) {
    case 'auto':
      return 'auto' as const;
    case 'default':
      return 'default' as const;
    case 'none':
      return 'none' as const;
    case 'context-menu':
      return 'context-menu' as const;
    case 'help':
      return 'help' as const;
    case 'pointer':
      return 'pointer' as const;
    case 'progress':
      return 'progress' as const;
    case 'wait':
      return 'wait' as const;
    case 'cell':
      return 'cell' as const;
    case 'crosshair':
      return 'crosshair' as const;
    case 'text':
      return 'text' as const;
    case 'vertical-text':
      return 'vertical-text' as const;
    case 'alias':
      return 'alias' as const;
    case 'copy':
      return 'copy' as const;
    case 'no-drop':
      return 'no-drop' as const;
    case 'not-allowed':
      return 'not-allowed' as const;
    case 'grab':
      return 'grab' as const;
    case 'grabbing':
      return 'grabbing' as const;
    case 'col-resize':
      return 'col-resize' as const;
    case 'row-resize':
      return 'row-resize' as const;
    case 'n-resize':
      return 'n-resize' as const;
    case 'e-resize':
      return 'e-resize' as const;
    case 's-resize':
      return 's-resize' as const;
    case 'w-resize':
      return 'w-resize' as const;
    case 'ne-resize':
      return 'ne-resize' as const;
    case 'nw-resize':
      return 'nw-resize' as const;
    case 'se-resize':
      return 'se-resize' as const;
    case 'sw-resize':
      return 'sw-resize' as const;
    case 'ew-resize':
      return 'ew-resize' as const;
    case 'ns-resize':
      return 'ns-resize' as const;
    case 'nesw-resize':
      return 'nesw-resize' as const;
    case 'nwse-resize':
      return 'nwse-resize' as const;
    case 'zoom-in':
      return 'zoom-in' as const;
    case 'zoom-out':
      return 'zoom-out' as const;

    default:
      return undefined;
  }
};
