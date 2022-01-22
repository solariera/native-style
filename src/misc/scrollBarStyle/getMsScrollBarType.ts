type ScrollBarWidthType = 'auto' | 'none' | 'thin';

export const getMsScrollBarType = (type?: string): ScrollBarWidthType | undefined => {
  switch (type) {
    case 'auto':
      return 'auto' as const;

    case 'none':
      return 'none' as const;

    case 'thin':
      return 'thin' as const;

    default:
      return undefined;
  }
};
