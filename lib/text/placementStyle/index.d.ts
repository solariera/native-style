declare type PlacementType = {
    height?: number;
    textAlign?: string;
    unit?: string;
};
declare const placementStyle: (props: PlacementType) => import("styled-components").FlattenSimpleInterpolation;
export { placementStyle };
