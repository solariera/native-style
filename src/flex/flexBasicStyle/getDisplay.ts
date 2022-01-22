type DisplayType = 'flex' | 'inline-flex';

export const getDisplay = (display?: string): DisplayType | undefined => {
  switch (display) {
    case 'flex':
      return 'flex' as const;

    case 'inline-flex':
      return 'inline-flex' as const;

    default:
      return undefined;
  }
};
