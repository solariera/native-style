import { css } from '~/css';

type SizeType = {
  width?: number;
  height?: number;
  unit?: string;
};

export const sizeStyle = (props: SizeType) => {
  const { width, height, unit = 'px' } = props;

  const styleString = css`
    ${width !== undefined && `width: ${width + unit};`}
    ${height !== undefined && `height: ${height + unit};`}
  `;

  return styleString;
};
