import { css } from '../../css';

type ScaleType = {
  scale?: number;
  scaleY?: number;
  origin?: string;
};

export const scaleStyle = (props: ScaleType) => {
  const { scale, scaleY, origin = 'center' } = props;

  if (scale === undefined) return css``;

  const styleString = css`
    transform: scale(${scale}, ${scaleY || scale}); /* Equal to scaleX(2) scaleY(0.5) */
    transform-origin: ${origin};
  `;

  return styleString;
};
