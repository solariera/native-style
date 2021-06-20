type BackgroundRepeatModeType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

const getBackgroundRepeatMode = (mode?: string): BackgroundRepeatModeType | undefined => {
  switch (mode) {
    case 'repeat':
      return 'repeat' as const;

    case 'repeat-x':
      return 'repeat-x' as const;

    case 'repeat-y':
      return 'repeat-y' as const;

    case 'no-repeat':
      return 'no-repeat' as const;

    default:
      return undefined;
  }
};

export { getBackgroundRepeatMode };
