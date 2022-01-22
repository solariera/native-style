declare type FlexItemsType = {
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string | number;
    alignSelf?: string;
    order?: number;
};
export declare const flexItemsStyle: (props: FlexItemsType) => import("styled-components").FlattenSimpleInterpolation;
export {};
