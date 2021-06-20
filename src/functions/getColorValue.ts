/**
 * getColorValue
 * 10進数や16進数を引数にRGB範囲の色数値(10進数)を返す
 * @param value
 */
const getColorValue = (value: number | string | null | undefined): number => {
  // 各色の最小値と最大値を定義する
  const MIN: number = 0;
  const MAX: number = 255;

  // 16進数変換用定数と16進数判定用の正規表現
  const HEX: number = 16;
  const hexFormat: RegExp = /^[0-9a-fA-F]{1,2}$/;

  // 引数の型がnumberの場合のみ処理を実行する
  if (typeof value === 'number') {
    // 最小値～最大値範囲内の整数値を戻り値にする
    const returnValue: number = Math.round(Math.max(MIN, Math.min(MAX, value)));

    // 検査されたカラー値を返す
    return returnValue;
  } else if (typeof value === 'string' && value.match(hexFormat)) {
    // 16進数を10進数に変換して再度この関数を実行する
    return getColorValue(parseInt(value, HEX));
  }

  // null, undefined, 0-FF以外の文字列の場合はエラーメッセージを出力する
  // TODO 最終的にはエラーをスローさせるが、今はデフォルト設定をセットする
  //throw new Error('!! The given value (' + value + ') is not a color value !!');
  return MAX;
};

export { getColorValue };
