declare type PositionType = {
    position?: string;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    unit?: string;
};
export declare const positionStyle: (props: PositionType) => import("styled-components").FlattenSimpleInterpolation;
export {};
