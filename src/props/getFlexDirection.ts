type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const getFlexDirection = (direction?: string): FlexDirectionType | undefined => {
  switch (direction) {
    case 'row':
      return 'row' as const;

    case 'row-reverse':
      return 'row-reverse' as const;

    case 'column':
      return 'column' as const;

    case 'column-reverse':
      return 'column-reverse' as const;

    default:
      return undefined;
  }
};

export { getFlexDirection };
