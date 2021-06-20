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

export { getBorderStyle };
