type FloatStyleType = 'none' | 'left' | 'right';

export const getFloatStyle = (type?: string): FloatStyleType => {
  switch (type) {
    case 'none':
      return 'none' as const;

    case 'left':
      return 'left' as const;

    case 'right':
      return 'right' as const;

    default:
      return 'none' as const;
  }
};
