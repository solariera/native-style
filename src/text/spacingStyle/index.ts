import { css } from '../../css';

type SpacingType = {
  letterSpacing?: number;
  unit?: string;
};

const spacingStyle = (props: SpacingType) => {
  const { letterSpacing, unit = 'px' } = props;

  const styleString = css`
    ${letterSpacing !== undefined ? `letter-spacing: ${letterSpacing + unit};` : ``}
  `;

  return styleString;
};

export { spacingStyle };
