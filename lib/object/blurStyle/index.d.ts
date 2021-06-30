declare type BlurType = {
    blur?: number;
    unit?: string;
};
declare const blurStyle: (props: BlurType) => import("styled-components").FlattenSimpleInterpolation;
export { blurStyle };
