import range from 'lodash/range';
import moment from 'moment';

/**
 * 获取当月日期数组，包含空格
 * @param firstDate
 * @returns {*}
 */
export default firstDate => {
  // 当月第一天星期
  const firstDay = moment(firstDate)
    .startOf('month')
    .day();
  // 日历第一天前的空格数量
  const firstBlank = firstDay === 0 ? 6 : firstDay - 1;
  // 当前月最大天数
  const maxDate = moment(firstDate)
    .endOf('month')
    .date();

  // 天数数组
  const dateRangeArr = range(1, maxDate + 1).map(item => moment(firstDate).date(item));
  const firstBlankArr = range(0, firstBlank, 0);
  // 日历最后一天的空格数量
  const remainGrid = (firstBlank + maxDate) % 7;
  const endBlankArr = range(0, remainGrid && 7 - remainGrid, 0);

  // 组装日历单元格
  return firstBlankArr.concat(dateRangeArr).concat(endBlankArr);
};
