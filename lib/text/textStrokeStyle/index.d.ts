declare type StrokeType = {
    strokeWidth?: number;
    strokeColor?: string;
    strokeColorAlpha?: number;
};
declare const textStrokeStyle: (props: StrokeType) => import("styled-components").FlattenSimpleInterpolation;
export { textStrokeStyle };
