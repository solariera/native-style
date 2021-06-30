declare type PositionType = {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    unit?: string;
};
declare const positionStyle: (props: PositionType) => import("styled-components").FlattenSimpleInterpolation;
export { positionStyle };
