type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export const getFlexWrap = (wrap?: string): FlexWrapType | undefined => {
  switch (wrap) {
    case 'nowrap':
      return 'nowrap' as const;

    case 'wrap':
      return 'wrap' as const;

    case 'wrap-reverse':
      return 'wrap-reverse' as const;

    default:
      return undefined;
  }
};
