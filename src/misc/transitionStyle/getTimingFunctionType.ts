type TimingFunctionType = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export const getTimingFunctionType = (type?: string): TimingFunctionType | undefined => {
  switch (type) {
    case 'ease':
      return 'ease' as const;
    case 'linear':
      return 'linear' as const;
    case 'ease-in':
      return 'ease-in' as const;
    case 'ease-out':
      return 'ease-out' as const;
    case 'ease-in-out':
      return 'ease-in-out' as const;

    default:
      return undefined;
  }
};
