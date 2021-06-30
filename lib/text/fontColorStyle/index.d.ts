declare type FontColorType = {
    fontColor?: string;
    fontColorAlpha?: number;
};
declare const fontColorStyle: (props: FontColorType) => import("styled-components").FlattenSimpleInterpolation;
export { fontColorStyle };
