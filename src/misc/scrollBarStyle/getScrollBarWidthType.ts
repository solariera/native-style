type MsScrollBarType = 'auto' | 'none' | 'scrollbar' | '-ms-autohiding-scrollbar';

export const getScrollBarWidthType = (type?: string): MsScrollBarType | undefined => {
  switch (type) {
    case 'auto':
      return 'auto' as const;

    case 'none':
      return 'none' as const;

    case 'scrollbar':
      return 'scrollbar' as const;

    case '-ms-autohiding-scrollbar':
      return '-ms-autohiding-scrollbar' as const;

    default:
      return undefined;
  }
};
