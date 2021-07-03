declare type FlexItemsType = {
    flexItemGrow?: number;
    flexItemShrink?: number;
    flexItemBasis?: string | number;
    flexItemAlign?: string;
    flexItemOrder?: number;
};
declare const flexItemsStyle: (props: FlexItemsType) => import("styled-components").FlattenSimpleInterpolation;
export { flexItemsStyle };
