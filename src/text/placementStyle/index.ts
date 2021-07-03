import { css } from '~/css';

type PlacementType = {
  height?: number;
  textAlign?: string;
  unit?: string;
};

export const placementStyle = (props: PlacementType) => {
  const { height, textAlign = 'left', unit = 'px' } = props;

  const styleString = css`
    ${height !== undefined ? `line-height: ${height + unit};` : ``}
    text-align: ${textAlign};
  `;

  return styleString;
};
