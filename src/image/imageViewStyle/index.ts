import { css } from '../../css';

type BackgroundRepeatModeType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

const getBackgroundRepeatMode = (mode?: string): BackgroundRepeatModeType | undefined => {
  switch (mode) {
    case 'repeat':
      return 'repeat' as const;

    case 'repeat-x':
      return 'repeat-x' as const;

    case 'repeat-y':
      return 'repeat-y' as const;

    case 'no-repeat':
      return 'no-repeat' as const;

    default:
      return undefined;
  }
};

type ImageViewType = {
  base64: string;
  repeat?: string;
};

const imageViewStyle = (props: ImageViewType) => {
  const { base64, repeat } = props;

  const mode = getBackgroundRepeatMode(repeat);

  if (mode)
    return css`
      background-image: url(${base64});
      background-repeat: ${mode};
    `;

  return css`
    background-image: url(${base64});
  `;
};

export { imageViewStyle };
