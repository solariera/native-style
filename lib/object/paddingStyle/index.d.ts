declare type PaddingType = {
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    unit?: string;
};
declare const paddingStyle: (props: PaddingType) => import("styled-components").FlattenSimpleInterpolation;
export { paddingStyle };
