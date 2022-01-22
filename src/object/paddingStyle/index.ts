import { css } from '../../css';

type PaddingType = {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  unit?: string;
};

export const paddingStyle = (props: PaddingType) => {
  const { paddingLeft, paddingRight, paddingTop, paddingBottom, unit = 'px' } = props;

  // 全てundefinedであれば「margin: 0」を返す
  if ([paddingLeft, paddingRight, paddingTop, paddingBottom].every((enable) => enable === undefined)) {
    const styleString = css`
      padding: 0;
    `;

    return styleString;
  }

  const styleString = css`
    padding-left: ${(paddingLeft !== undefined ? paddingLeft : 0) + unit};
    padding-right: ${(paddingRight !== undefined ? paddingRight : 0) + unit};
    padding-top: ${(paddingTop !== undefined ? paddingTop : 0) + unit};
    padding-bottom: ${(paddingBottom !== undefined ? paddingBottom : 0) + unit};
  `;

  return styleString;
};
