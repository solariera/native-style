declare type ImageViewType = {
    base64: string;
    repeat?: string;
};
declare const imageViewStyle: (props: ImageViewType) => import("styled-components").FlattenSimpleInterpolation;
export { imageViewStyle };
