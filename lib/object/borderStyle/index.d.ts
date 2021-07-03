declare type BorderType = {
    borderWidth?: number;
    borderColor?: string;
    borderColorAlpha?: number;
    borderStyle?: string;
    borderLeft?: boolean;
    borderRight?: boolean;
    borderTop?: boolean;
    borderBottom?: boolean;
    unit?: string;
};
export declare const borderStyle: (props: BorderType) => import("styled-components").FlattenSimpleInterpolation;
export {};
