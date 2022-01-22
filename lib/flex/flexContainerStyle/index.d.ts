declare type FlexContainerType = {
    justifyContent?: string;
    alignContent?: string;
    alignItems?: string;
};
/**
 * flexContainerStyle
 * フレックスボックスのコンテナ側のスタイル
 * @param justify itemsの横方向の整列を指定
 * @param align 縦方向にitemをどのように配置していくかを指定
 * @param items itemsの縦方向の整列を指定
 */
export declare const flexContainerStyle: (props: FlexContainerType) => import("styled-components").FlattenSimpleInterpolation;
export {};
