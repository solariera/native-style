declare type FlexBasicType = {
    flexDirection?: string;
    flexWrap?: string;
    styleDisplay?: string;
};
declare const flexBasicStyle: (props: FlexBasicType) => import("styled-components").FlattenSimpleInterpolation;
export { flexBasicStyle };
