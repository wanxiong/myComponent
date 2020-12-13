
// import React, { useState, useEffect } from 'react';
// import Calendar from '../src/Calendar';
// import moment from 'moment';



// export const 日历 = function MyCalendarTpl (arg) {
  
//   const [isOpen, setIsOpen] = useState(arg.isOpen || false)
//   const [disabledStartTime, setDisabledStartTime] = useState(moment().add(7, 'days'))
//   const [disabledEndTime] = useState(moment().add(11, 'days'))
//   const [checkStartTime, setCheckStartTime] = useState('')
//   const [checkEndTime, setCheckEndTime] = useState('')
//   const [isMultipleMode, setIsMultipleMode] = useState(arg.isMultipleMode || false)
//   const [monthCount, setMonthCount] = useState(arg.monthCount || '')
//   const [themeColor, setThemeColor] = useState(arg.themeColor || '')
//   const [endDate, setEndDate] = useState(arg.endDate || '')
//   const [startDate, setStartDate] = useState(arg.startDate || '')
//   const onClose = () => {
//     setIsOpen(false)
//   }

//   const onSelect = (start, end) => {
//     setCheckStartTime(start)
//     end && setCheckEndTime(end)
//     setIsOpen(false)
//   }

//   useEffect(() => {
//     setIsMultipleMode(arg.isMultipleMode)
//     setMonthCount(arg.monthCount)
//     setThemeColor(arg.themeColor)
//     setEndDate(arg.endDate)
//     setStartDate(arg.startDate)
//   }, [arg.isMultipleMode, arg.monthCount, arg.themeColor, arg.endDate, arg.startDate])
//   return (
//     <React.Fragment>
//       <button onClick={() => setIsOpen(true)}>显示日历</button>
//       {
//         isMultipleMode ? (
//           checkStartTime && (<div>选择区间的时间：{checkStartTime.format('YYYY-MM-DD')} - {checkEndTime.format('YYYY-MM-DD')}</div>)
//         ) : (
//           checkStartTime && (<div>选择的时间：{checkStartTime.format('YYYY-MM-DD')}</div>)
//         )
//       }
//       <Calendar
//         isOpen={arg.isOpen || isOpen}
//         onClose={onClose}
//         // disabledStartTime={disabledStartTime}
//         // disabledEndTime={disabledEndTime}
//         onSelect={onSelect}
//         isMultipleMode={isMultipleMode}
//         monthCount={monthCount}
//         themeColor={themeColor}
//         startDate={startDate}
//         endDate={endDate}
//       >
        
//       </Calendar>
//     </React.Fragment>
    
//   )
// }

// export default {
//   title: 'Calendar',
//   component: 日历
// };
// 日历.argTypes = {
//   isOpen: {
//     control: 'boolean',
//     defaultValue: false,
//     description:'是否显示组件日历',
//     table: {
//       defaultValue: { summary: 'false' },
//     },
//   },
//   isMultipleMode: {
//     description:'是否可以选择开始和结束日期',
//     table: {
//       defaultValue: { summary: 'false' },
//     },
//     defaultValue: false,
//     control: 'boolean',
//   },
//   monthCount: {
//     description:'默认加载几个月的日历',
//     table: {
//       defaultValue: { summary: '1' },
//     },
//     defaultValue: 1,
//     control: 'number',
//   },
//   disabledStartTime: {
//     description:'禁止点击开始之前时间段',
//     table: {
//       defaultValue: { summary: '默认禁止当前时间' },
//     },
//     // defaultValue: 1,
//     // control: 'number',
//   },
//   disabledEndTime: {
//     description:'禁止点击结束之后时间段',
//     table: {
//       defaultValue: { summary: '无限制' },
//     },
//     // defaultValue: 1,
//     // control: 'number',
//   },
//   onSelect: {
//     description:'点击确定的回调,function(startend, endTime) {}',
//     table: {
//       defaultValue: { summary: 'function' },
//     },
//     control: '-'
//   },
//   onClose: {
//     description:'点击关闭的回调',
//     table: {
//       defaultValue: { summary: 'function' },
//     },
//     control: '-'
//   },
//   themeColor:{
//     description:'默认日历底色',
//     table: {
//       defaultValue: { summary: '字符串' },
//     },
//     control: 'color'
//   },
//   startDate: {
//     description:'默认选中开始时间',
//     table: {
//       defaultValue: { summary: 'date' },
//     },
//     control: 'date'
//   },
//   endDate: {
//     description:'默认选中结束时间',
//     table: {
//       defaultValue: { summary: 'date' },
//     },
//     control: 'date'
//   }
// }

// export const 单选日历= () => {
//   const [isOpen, setIsOpen] = useState(false)
//     const [checkStartTime, setCheckStartTime] = useState('')
//     const onClose = () => {
//       setIsOpen(false)
//     }
  
//     const onSelect = (start, end) => {
//       setCheckStartTime(start)
//       setIsOpen(false)
//     }
//     return (
//       <React.Fragment>
//         <button onClick={() => setIsOpen(true)}>单选日历</button>
//         {
//           checkStartTime && (<div>选择的时间：{checkStartTime.format('YYYY-MM-DD')}</div>)
//         }
//         <Calendar
//           isOpen={isOpen}
//           onClose={onClose}
//           onSelect={onSelect}
//         >
//         </Calendar>
//       </React.Fragment>
//     )
// }
// 单选日历.argTypes = {
//   isOpen: {
//     control: 'boolean',
//     defaultValue: false,
//     description:'是否显示组件日历',
//     table: {
//       defaultValue: { summary: 'false' },
//     },
//   },
//   isMultipleMode: {
//     description:'是否可以选择开始和结束日期',
//     table: {
//       defaultValue: { summary: 'false' },
//     },
//     defaultValue: false,
//     control: 'boolean',
//   },
//   monthCount: {
//     description:'默认加载几个月的日历',
//     table: {
//       defaultValue: { summary: '1' },
//     },
//     defaultValue: 1,
//     control: 'number',
//   },
//   disabledStartTime: {
//     description:'禁止点击开始之前时间段',
//     table: {
//       defaultValue: { summary: '默认禁止当前时间' },
//     },
//     // defaultValue: 1,
//     // control: 'number',
//   },
//   disabledEndTime: {
//     description:'禁止点击结束之后时间段',
//     table: {
//       defaultValue: { summary: '无限制' },
//     },
//     // defaultValue: 1,
//     // control: 'number',
//   },
//   onSelect: {
//     description:'点击确定的回调,function(startend, endTime) {}',
//     table: {
//       defaultValue: { summary: 'function' },
//     },
//     control: '-'
//   },
//   onClose: {
//     description:'点击关闭的回调',
//     table: {
//       defaultValue: { summary: 'function' },
//     },
//     control: '-'
//   },
//   themeColor:{
//     description:'默认日历底色',
//     table: {
//       defaultValue: { summary: '字符串' },
//     },
//     control: 'color'
//   },
//   startDate: {
//     description:'默认选中开始时间',
//     table: {
//       defaultValue: { summary: 'date' },
//     },
//     control: 'date'
//   },
//   endDate: {
//     description:'默认选中结束时间',
//     table: {
//       defaultValue: { summary: 'date' },
//     },
//     control: 'date'
//   }
// }