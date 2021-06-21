import { css } from '../../css';

type PlacementType = {
  height?: number;
  align?: string;
  unit?: string;
};

const placementStyle = (props: PlacementType) => {
  const { height, align = 'left', unit = 'px' } = props;

  const styleString = css`
    ${height !== undefined ? `line-height: ${height + unit};` : ``}
    text-align: ${align};
  `;

  return styleString;
};

export { placementStyle };
