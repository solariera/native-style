import { css } from '../../css';
import { getTimingFunctionType } from './getTimingFunctionType';

type SizeType = {
  duration?: number;
  timingFunction?: string;
  durationUnit?: string;
};

export const transitionStyle = (props: SizeType) => {
  const { duration, timingFunction, durationUnit = 's' } = props;

  /**
   * transition-timing-functionの値を取得する
   */
  const timingFunctionType = getTimingFunctionType(timingFunction);

  const styleString = css`
    ${duration !== undefined && `transition-duration: ${duration + durationUnit};`}
    ${timingFunctionType !== undefined && `transition-timing-function: ${timingFunctionType};`}
  `;

  return styleString;
};
