import { getColorValue } from './getColorValue';

type ColorValuesType = { red: number; green: number; blue: number; alpha?: number };

const getColorValues = (code: string, alpha?: number): ColorValuesType => {
  // 各色の対象カラム番号と総カラム数
  const RED: number = 0;
  const GREEN: number = 1;
  const BLUE: number = 2;
  const COUNT: number = 3;

  // カラーコード判定用正規表現 (FF00EEなどにマッチ)
  const colorCodeFormat: RegExp = /([0-9a-fA-F]{2})/g;

  // 引数を二桁の16進数で分割して配列codesに取り込む
  //const codes: string[] | null = code.match(colorCodeFormat);
  let codes: string[] | null = code.match(colorCodeFormat);

  if (codes === null || codes.length < COUNT) {
    // null, undefined, 0-FF以外の文字列の場合はエラーメッセージを出力する
    codes = ['ff', 'ff', 'ff'];
    // TODO 最終的にはエラーをスローさせるが、今はデフォルト設定をセットする
    //throw new Error('!! The given value (' + code + ') is not a color code !!');
  }

  // コードのRGB値(16進数)を10進数に変換して配列に格納しなおす
  const values: number[] = codes.map((rgb: string) => parseInt(rgb, 16));

  // 各値をプロパティ(RGB)に格納する
  const red: number = getColorValue(values[RED]);
  const green: number = getColorValue(values[GREEN]);
  const blue: number = getColorValue(values[BLUE]);

  // フォーマットに組み込んで返す
  return { red, green, blue, alpha };
};

export { getColorValues };
