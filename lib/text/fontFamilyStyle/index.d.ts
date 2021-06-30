declare type FontFamilyType = {
    fontFamily?: string;
    fontStyle?: string;
};
declare const fontFamilyStyle: (props: FontFamilyType) => import("styled-components").FlattenSimpleInterpolation;
export { fontFamilyStyle };
