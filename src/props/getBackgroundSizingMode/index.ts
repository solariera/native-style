type BackgroundSizingModeType = 'auto' | 'contain' | 'cover';

const getBackgroundSizingMode = (mode?: string | number): BackgroundSizingModeType | undefined => {
  switch (mode) {
    case 'auto':
      return 'auto' as const;

    case 'contain':
      return 'contain' as const;

    case 'cover':
      return 'cover' as const;

    default:
      return undefined;
  }
};

export { getBackgroundSizingMode };
