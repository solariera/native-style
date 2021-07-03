declare type MarginType = {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    unit?: string;
};
export declare const marginStyle: (props: MarginType) => import("styled-components").FlattenSimpleInterpolation;
export {};
