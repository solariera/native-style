declare type StrokeType = {
    strokeWidth?: number;
    strokeColor?: string;
    strokeColorAlpha?: number;
};
declare const strokeStyle: (props: StrokeType) => import("styled-components").FlattenSimpleInterpolation;
export { strokeStyle };
