type ListType =
  | 'none'
  | 'disc'
  | 'circle'
  | 'square'
  | 'lower-roman'
  | 'upper-roman'
  | 'lower-greek'
  | 'decimal'
  | 'decimal-leading-zero'
  | 'lower-latin'
  | 'lower-alpha'
  | 'upper-latin'
  | 'upper-alpha'
  | 'cjk-ideographic'
  | 'hiragana'
  | 'katakana'
  | 'hiragana-iroha'
  | 'katakana-iroha'
  | 'hebrew'
  | 'armenian'
  | 'georgian';

export const getListStyleType = (type?: string): ListType | undefined => {
  switch (type) {
    case 'none':
      return 'none' as const;

    case 'disc':
      return 'disc' as const;

    case 'circle':
      return 'circle' as const;

    case 'square':
      return 'square' as const;

    case 'lower-roman':
      return 'lower-roman' as const;

    case 'upper-roman':
      return 'upper-roman' as const;

    case 'lower-greek':
      return 'lower-greek' as const;

    case 'decimal':
      return 'decimal' as const;

    case 'decimal-leading-zero':
      return 'decimal-leading-zero' as const;

    case 'lower-latin':
      return 'lower-latin' as const;

    case 'lower-alpha':
      return 'lower-alpha' as const;

    case 'upper-latin':
      return 'upper-latin' as const;

    case 'upper-alpha':
      return 'upper-alpha' as const;

    case 'cjk-ideographic':
      return 'cjk-ideographic' as const;

    case 'hiragana':
      return 'hiragana' as const;

    case 'katakana':
      return 'katakana' as const;

    case 'hiragana-iroha':
      return 'hiragana-iroha' as const;

    case 'katakana-iroha':
      return 'katakana-iroha' as const;

    case 'hebrew':
      return 'hebrew' as const;

    case 'armenian':
      return 'armenian' as const;

    case 'georgian':
      return 'georgian' as const;

    default:
      return undefined;
  }
};
