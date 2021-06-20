import { getColorValues } from './getColorValues';

const getRGBA = (code: string, alpha?: number): string => {
  const { red, blue, green } = getColorValues(code);

  // フォーマットに組み込んで返す
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export { getRGBA };
