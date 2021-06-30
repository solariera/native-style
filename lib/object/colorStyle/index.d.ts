declare type ColorType = {
    bgColor?: string;
    bgColorAlpha?: number;
};
declare const colorStyle: (props: ColorType) => import("styled-components").FlattenSimpleInterpolation;
export { colorStyle };
