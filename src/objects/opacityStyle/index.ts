import { css } from '../../configs/css-in-js';

type OpacityType = {
  opacity?: number;
};

const opacityStyle = (props: OpacityType) => {
  const { opacity } = props;

  if (opacity === undefined) return css``;

  const styleString = css`
    opacity: ${opacity};
  `;

  return styleString;
};

export { opacityStyle };
