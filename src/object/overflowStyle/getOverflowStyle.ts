type OverflowStyleType = 'auto' | 'visible' | 'hidden' | 'scroll';

export const getOverflowStyle = (type?: string): OverflowStyleType => {
  switch (type) {
    case 'visible':
      return 'visible' as const;

    case 'hidden':
      return 'hidden' as const;

    case 'scroll':
      return 'scroll' as const;

    default:
      return 'auto' as const;
  }
};
