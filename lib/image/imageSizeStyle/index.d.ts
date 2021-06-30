declare type ImageSizeType = {
    width: number | string;
    height?: number | string;
    unit?: string;
};
declare const imageSizeStyle: (props: ImageSizeType) => import("styled-components").FlattenSimpleInterpolation;
export { imageSizeStyle };
