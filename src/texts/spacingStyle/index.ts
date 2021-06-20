import { css } from '../../css';

type SpacingType = {
  spacing?: number;
  unit?: string;
};

const spacingStyle = (props: SpacingType) => {
  const { spacing, unit = 'px' } = props;

  const styleString = css`
    ${spacing !== undefined ? `letter-spacing: ${spacing + unit};` : ``}
  `;

  return styleString;
};

export { spacingStyle };
