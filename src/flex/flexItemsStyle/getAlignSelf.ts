type AlignSelfType = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export const getAlignSelf = (align?: string): AlignSelfType | undefined => {
  switch (align) {
    case 'auto':
      return 'auto' as const;

    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'baseline':
      return 'baseline' as const;

    case 'stretch':
      return 'stretch' as const;

    default:
      return undefined;
  }
};
