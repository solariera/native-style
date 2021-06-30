declare type SizeType = {
    width?: number;
    height?: number;
    unit?: string;
};
declare const sizeStyle: (props: SizeType) => import("styled-components").FlattenSimpleInterpolation;
export { sizeStyle };
