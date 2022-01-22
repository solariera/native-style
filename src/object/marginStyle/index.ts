import { css } from '../../css';

type MarginType = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  unit?: string;
};

export const marginStyle = (props: MarginType) => {
  const { marginLeft, marginRight, marginTop, marginBottom, unit = 'px' } = props;

  // 全てundefinedであれば「margin: 0」を返す
  if ([marginLeft, marginRight, marginTop, marginBottom].every((enable) => enable === undefined)) {
    const styleString = css`
      margin: 0;
    `;

    return styleString;
  }

  const styleString = css`
    margin-left: ${(marginLeft !== undefined ? marginLeft : 0) + unit};
    margin-right: ${(marginRight !== undefined ? marginRight : 0) + unit};
    margin-top: ${(marginTop !== undefined ? marginTop : 0) + unit};
    margin-bottom: ${(marginBottom !== undefined ? marginBottom : 0) + unit};
  `;

  return styleString;
};
