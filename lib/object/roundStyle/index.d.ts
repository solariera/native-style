declare type RoundType = {
    roundSize?: number | number[];
    unit?: number;
};
declare const roundStyle: (props: RoundType) => import("styled-components").FlattenSimpleInterpolation;
export { roundStyle };
