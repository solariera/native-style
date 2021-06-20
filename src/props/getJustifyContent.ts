type JustifyContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

const getJustifyContent = (justify?: string): JustifyContentType | undefined => {
  switch (justify) {
    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'space-between':
      return 'space-between' as const;

    case 'space-around':
      return 'space-around' as const;

    default:
      return undefined;
  }
};

export { getJustifyContent };
