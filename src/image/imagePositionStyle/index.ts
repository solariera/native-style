import { css } from '../../css';

type ImagePositionType = {
  x?: number;
  y?: number;
  unit?: number;
};

export const imagePositionStyle = (props: ImagePositionType) => {
  const { x, y, unit = 'px' } = props;

  if (x && y)
    return css`
      background-position-x: ${x.toString() + unit};
      background-position-y: ${y.toString() + unit};
    `;

  if (x && !y)
    return css`
      background-position-x: ${x.toString() + unit};
    `;

  if (!x && y)
    return css`
      background-position-y: ${y.toString() + unit};
    `;

  return css``;
};
