type WhiteSpaceType = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';

export const getWhiteSpace = (type?: string): WhiteSpaceType | undefined => {
  switch (type) {
    case 'normal':
      return 'normal' as const;

    case 'nowrap':
      return 'nowrap' as const;

    case 'pre':
      return 'pre' as const;

    case 'pre-wrap':
      return 'pre-wrap' as const;

    case 'pre-line':
      return 'pre-line' as const;

    case 'break-spaces':
      return 'break-spaces' as const;

    default:
      return undefined;
  }
};
