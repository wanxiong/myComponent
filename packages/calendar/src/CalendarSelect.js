import React, { useState } from 'react';
import './CalendarSelect.less';
import ModalOverflow from '../../modalOverflow';
/**
 * @params  { Boolean isOpen} 是否开启禁止页面body滚动默认 false
 * @params  { Function onClose} 点击页面空白区域的回调
 * @params  { String title} 日历标题
 * @params  { React.Element headerRender} 日历头部区域
 * @params  { Function handleScroll} 页面的滚动scroll事件回调
 * @params  { React.Element footerRender} 日历尾部区域
 * @params  { Function dateCellRender} 日历的每一天的render方法
 * @params  { Array monthArr} 渲染日历的数据源
 *          {
 *            firstDate: String, // 当前日历的时间
 *            dateArr: Array     // 当前日历的每一天数据
 *          }
 * @params  { Function contentRender} 日历中间的自定义区域，输出function返回的值，此时dateCellRender无效
*/
export default function CalendarSelect({
  isOpen = false,
  onClose = () => {},
  title = '',
  headerRender = null,
  footerRender = null,
  handleScroll = () => {},
  dateCellRender = () => {},
  contentRender = null,
  monthArr = []
}) {

  onscroll = (e) => {
    const {scrollTop, scrollHeight, offsetHeight} = e.target
    handleScroll(scrollTop, scrollHeight, offsetHeight, e)
  }

  return (
    <div className={`wrc-calendarWrap ${isOpen ? 'opened' : ''}`}>
      <div className={'bg'} onClick={onClose} />
      {isOpen && <ModalOverflow />}
      <div className={'selectWrap'}>
        <div className={'selectHeader'}>
          {
            headerRender ? headerRender : (
              <div className={'banner'} onClick={onClose}>
                <span className={'closeIcon'}><font/></span>
                <div className={'title'}>{title || '选择日期'}</div>
                <div />
              </div>
            )
          }
          <div className={'weekWrap'}>
            <em>一</em>
            <em>二</em>
            <em>三</em>
            <em>四</em>
            <em>五</em>
            <em>六</em>
            <em>日</em>
          </div>
        </div>
        <div className={'monthContent'} onScroll={onscroll}>
          {
            contentRender
              ? contentRender(monthArr)
              : (
                monthArr.map(monthItem => {
                  const firstDateStr = monthItem.firstDate.format('YYYY年MM月');
                  return (
                    <div key={firstDateStr} className={'monthItem'}>
                      <div className={'monthTitle'}>{firstDateStr}</div>
                      <div className={'dateContent'}>
                        {monthItem.dateArr.map((item, index) => (
                          <div key={index} className={'dateItem'}>
                            {item ? dateCellRender(item, index) : undefined}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )
          }
        </div>
        <div className={'footer'}>{footerRender()}</div>
      </div>
    </div>
  )
}