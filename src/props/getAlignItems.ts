type AlignItemType = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

const getAlignItems = (align?: string): AlignItemType | undefined => {
  switch (align) {
    case 'flex-start': {
      return 'flex-start' as const;
    }

    case 'flex-end': {
      return 'flex-end' as const;
    }

    case 'center': {
      return 'center' as const;
    }

    case 'baseline': {
      return 'baseline' as const;
    }

    case 'stretch': {
      return 'stretch' as const;
    }

    default: {
      return undefined;
    }
  }
};

export { getAlignItems };
