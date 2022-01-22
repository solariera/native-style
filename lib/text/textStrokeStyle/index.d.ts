declare type StrokeType = {
    strokeWidth?: number;
    strokeColor?: string;
    strokeColorAlpha?: number;
    unit?: string;
};
export declare const textStrokeStyle: (props: StrokeType) => import("styled-components").FlattenSimpleInterpolation;
export {};
