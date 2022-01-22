declare type ScrollBarType = {
    scrollBarWidth?: number;
    scrollBarHeight?: number;
    scrollBarColor?: string;
    scrollBarColorAlpha?: number;
    scrollBarThumbColor?: string;
    scrollBarThumbColorAlpha?: number;
    scrollBarUnit?: number;
    msScrollBar?: string;
    ffScrollBar?: string;
};
export declare const scrollBarStyle: (props: ScrollBarType) => import("styled-components").FlattenSimpleInterpolation;
export {};
