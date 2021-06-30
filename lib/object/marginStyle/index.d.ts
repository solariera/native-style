declare type MarginType = {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    unit?: string;
};
declare const marginStyle: (props: MarginType) => import("styled-components").FlattenSimpleInterpolation;
export { marginStyle };
