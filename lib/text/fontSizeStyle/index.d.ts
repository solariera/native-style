declare type FontSizeType = {
    fontWeight?: number;
    fontSize?: number;
    unit?: string;
};
declare const fontSizeStyle: (props: FontSizeType) => import("styled-components").FlattenSimpleInterpolation;
export { fontSizeStyle };
