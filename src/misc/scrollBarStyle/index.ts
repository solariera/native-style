import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';
import { getMsScrollBarType } from './getMsScrollBarType';
import { getScrollBarWidthType } from './getScrollBarWidthType';

type ScrollBarType = {
  scrollBarWidth?: number;
  scrollBarHeight?: number;
  scrollBarColor?: string;
  scrollBarColorAlpha?: number;
  scrollBarThumbColor?: string;
  scrollBarThumbColorAlpha?: number;
  scrollBarUnit?: number;
  msScrollBar?: string;
  ffScrollBar?: string;
};

export const scrollBarStyle = (props: ScrollBarType) => {
  const {
    scrollBarWidth,
    scrollBarHeight,
    scrollBarColor,
    scrollBarColorAlpha,
    scrollBarThumbColor,
    scrollBarThumbColorAlpha,
    scrollBarUnit = 'px',
    msScrollBar,
    ffScrollBar,
  } = props;

  const scrollBarRgba = scrollBarColor ? rgba(scrollBarColor, scrollBarColorAlpha) : undefined;
  const scrollBarThumbRgba = scrollBarThumbColor ? rgba(scrollBarThumbColor, scrollBarThumbColorAlpha) : undefined;

  const msScrollBarType = getMsScrollBarType(msScrollBar);
  const ffScrollBarType = getScrollBarWidthType(ffScrollBar);

  const styleString = css`
    ${ffScrollBarType ? `scrollbar-width: ` + ffScrollBarType + `;` : ``}
    ${msScrollBarType ? `-ms-overflow-style: ` + msScrollBarType + `;` : ``}

    &::-webkit-scrollbar {
      ${scrollBarWidth ? `height: ` + scrollBarWidth + scrollBarUnit + `;` : ``}
      ${scrollBarHeight ? `height: ` + scrollBarHeight + scrollBarUnit + `;` : ``}
      ${scrollBarRgba ? `background-color: ` + scrollBarRgba + `;` : ``}
    }

    &::-webkit-scrollbar-thumb {
      ${scrollBarThumbRgba ? `background-color: ` + scrollBarThumbRgba + `;` : ``}
    }
  `;

  return styleString;
};
