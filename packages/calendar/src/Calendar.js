import React, { useState, useEffect } from 'react';
import moment from 'moment';
import CalendarSelect from './CalendarSelect';
import './Calendar.less';
import getMonthDateRange from './getMonthDateRange'

export default function Calendar ({
  startDate,
  endDate,
  handleScroll,
  dateCellBottomRender,
  disabledStartTime,
  disabledEndTime,
  onClose = () => {},
  themeColor = '#fff',
  isMultipleMode = false,
  onSelect = () => {},
  headerRender = null,
  contentRender = null,
  monthCount,
  isOpen,
  defaultDate
}) {
  const [startMoment, setStartMoment] = useState(startDate ? moment(startDate) : null);
  const [endMoment, setEndMoment] = useState(endDate ? moment(endDate) : null);
  const [nowDate] = useState(defaultDate || moment())
  const [count, setCount] = useState(0)
  const [monthArr, setMonthArr] = useState([]);


  const initMonthArr = (changeMonth) => {
    const currentDate = moment()
      .date(1)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0);
    // 最近 3 个月日历
    const monthArr = []
    for (let i = 0; i < Number(changeMonth || 1); i++) {
      const firstDate = moment(currentDate).add(i, 'months');
      monthArr.push({
        firstDate,
        dateArr: getMonthDateRange(firstDate),
      })
    }
    return monthArr;
  }

  useEffect(() => {
    let nowDateArr = initMonthArr(monthCount)
    setMonthArr([
      ...nowDateArr
    ])
  }, [])

  const onSelectDate = (dateMoment) => {
    // 第一次选择
    if (count === 0) {
      setStartMoment(dateMoment);
      // 多个日期不自动选择结束日期
      setEndMoment(isMultipleMode ? null : dateMoment);
      if (isMultipleMode) {
        setCount(1);
      }
    } else if (count === 1 && dateMoment.isBefore(startMoment)) {
      setStartMoment(dateMoment);
      setCount(1);
    } else if (count === 1) {
      setEndMoment(dateMoment);
      setCount(0);
    }
  }

  const dateCellRender = (currentMoment, index) => {
    const dateStr = currentMoment.format('YYYY-MM-DD');
    const nowDateStr = nowDate.format('YYYY-MM-DD')
    // 设置禁用日期
    // 中间没有库存的日期之后都不能选择
    // 禁用日期点击
    let nowSelectedStartDisabledMoment = null
    // 是否有禁止时间
    //  disabledStartTime,
    // disabledEndTime,
    if (disabledStartTime && disabledEndTime) {
      if (disabledStartTime.isAfter(currentMoment) || disabledEndTime.isBefore(currentMoment)) {
        nowSelectedStartDisabledMoment = true
      }
    } else {
      if (
        nowDate.isAfter(currentMoment)
      ) {
        nowSelectedStartDisabledMoment = true;
      }
    }
    
    if (nowDateStr === dateStr) {
      return <div className={'wrc_calendar_disabledText'}>今日</div>
    } else if (nowDate.isAfter(currentMoment)) {
      return <div className={'wrc_calendar_disabledText'}>{currentMoment.date()}</div>
    } else if (nowSelectedStartDisabledMoment) {
      return (
        <div className={'wrc_calendar_selectItem'}>
          <div className={'wrc_calendar_disabledText'}>{currentMoment.date()}</div>
          { dateCellBottomRender && dateCellBottomRender(currentMoment, index)}
        </div>
      )
    } else {
      const isSameStart = currentMoment.isSame(startMoment);
      
      const isSameEnd = currentMoment.isSame(endMoment);
      const isBetween =
        currentMoment.isBefore(endMoment) && currentMoment.isAfter(startMoment);
      const disabledDate =
        nowSelectedStartDisabledMoment &&
        nowSelectedStartDisabledMoment.isBefore(currentMoment);
      return (
        <div
          className={
            `
              wrc_calendar_selectItem
              ${isSameStart ? 'selectedStart': '' }
              ${isSameEnd ? 'selectedEnd': '' }
              ${isBetween ? 'selected': '' }
              ${disabledDate ? 'disabledDate': '' }
            `
          }
          onClick={() => {
            if (!disabledDate) {
              onSelectDate(currentMoment, index);
            }
          }}
          style={{ 'background': themeColor }}
        >
          {
            (isSameStart && isSameEnd)
              ? (
                <div className={'tipText'}>已选</div>
              )
              : isSameStart
                ? (<div className={'tipText'}>开始</div>)
                : isSameEnd
                  ? (<div className={'tipText'}>结束</div>)
                  : null
          }
          <div>{currentMoment.date()}</div>
          { dateCellBottomRender && dateCellBottomRender(currentMoment, index)}
        </div>
      )
    }
  }

  const footerRender= () => (
    <div className={'wrc_calendar_footer'}>
      <button
        className={`${(startMoment && endMoment) ? 'check_footer' : 'no_check_footer'}`}
        disabled={!(startMoment && endMoment)}
        onClick={() => {
          onSelect(startMoment, endMoment);
        }}
        >
          确定
        </button>
    </div>

  )

  return (
    <div>
      <CalendarSelect
        handleScroll={handleScroll}
        monthArr={monthArr}
        isOpen = {isOpen}
        onClose = {onClose}
        footerRender={footerRender}
        headerRender = {headerRender}
        dateCellRender = {dateCellRender}
        contentRender = {contentRender}
      />
    </div>
  )
}