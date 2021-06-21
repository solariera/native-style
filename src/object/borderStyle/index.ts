import { getRGBA } from '@solariera/rgba-model/src';
import { css } from '../../css';

type BorderStyleType = 'solid' | 'dotted' | 'dashed';

const getBorderStyle = (type?: string): BorderStyleType => {
  switch (type) {
    case 'solid':
      return 'solid' as const;

    case 'dotted':
      return 'dotted' as const;

    case 'dashed':
      return 'dashed' as const;

    default:
      return 'solid' as const;
  }
};

type BorderType = {
  width?: number;
  color?: string;
  alpha?: number;
  type?: string;
  leftEnable?: boolean;
  rightEnable?: boolean;
  topEnable?: boolean;
  bottomEnable?: boolean;
  unit?: string;
};

const borderStyle = (props: BorderType) => {
  const { width = 0, color, alpha, type, leftEnable, rightEnable, topEnable, bottomEnable, unit = 'px' } = props;

  if (!width || !color) return css``;

  const rgba: string = getRGBA(color, alpha);

  const borderStyle: string = getBorderStyle(type);

  const styleString = [leftEnable, rightEnable, topEnable, bottomEnable].some((enable) => enable)
    ? css`
        border: ${width + unit} ${borderStyle} ${rgba};
      `
    : css`
        ${leftEnable && `border-left: ${width + unit} ${borderStyle} ${rgba};`}
        ${rightEnable && `border-right: ${width + unit} ${borderStyle} ${rgba};`}
        ${topEnable && `border-top: ${width + unit} ${borderStyle} ${rgba};`}
        ${bottomEnable && `border-bottom: ${width + unit} ${borderStyle} ${rgba};`}
      `;

  return styleString;
};

export { borderStyle };
