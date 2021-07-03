import { css } from '~/css';
import { getBackgroundRepeatMode } from './getBackgroundRepeatMode';

type ImageViewType = {
  base64: string;
  repeat?: string;
};

export const imageViewStyle = (props: ImageViewType) => {
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
