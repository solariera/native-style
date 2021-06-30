declare type LetterSpacingType = {
    letterSpacing?: number;
    unit?: string;
};
declare const letterSpacingStyle: (props: LetterSpacingType) => import("styled-components").FlattenSimpleInterpolation;
export { letterSpacingStyle };
