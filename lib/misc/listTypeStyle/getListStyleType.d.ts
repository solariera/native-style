declare type ListType = 'none' | 'disc' | 'circle' | 'square' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'decimal' | 'decimal-leading-zero' | 'lower-latin' | 'lower-alpha' | 'upper-latin' | 'upper-alpha' | 'cjk-ideographic' | 'hiragana' | 'katakana' | 'hiragana-iroha' | 'katakana-iroha' | 'hebrew' | 'armenian' | 'georgian';
export declare const getListStyleType: (type?: string | undefined) => ListType | undefined;
export {};
