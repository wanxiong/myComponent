import { storiesOf, addDecorator, addParameters } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes'
import Doc from '../README.md';

import React, { useState, useEffect } from 'react';
import Calendar from '../src/Calendar';
import moment from 'moment';
addDecorator(withNotes)
storiesOf('Calendar', module)
  // .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('单选日历', () => {
        const [isOpen, setIsOpen] = useState(false)
        const [checkStartTime, setCheckStartTime] = useState('')
        const onClose = () => {
          setIsOpen(false)
        }
      
        const onSelect = (start, end) => {
          setCheckStartTime(start)
          setIsOpen(false)
        }
      
        return (
          <React.Fragment>
            <button onClick={() => setIsOpen(true)}>单选日历</button>
            {
              checkStartTime && (<div>选择的时间：{checkStartTime.format('YYYY-MM-DD')}</div>)
            }
            <Calendar
              isOpen={isOpen}
              onClose={onClose}
              onSelect={onSelect}
            >
            </Calendar>
          </React.Fragment>
        )
    }, {
      notes: {
        markdown: Doc
      }
    })
    .add('多选日历', () => {
      const [isOpen, setIsOpen] = useState(false)
      const [checkStartTime, setCheckStartTime] = useState('')
      const [checkEndTime, setCheckEndTime] = useState('')
      const onClose = () => {
        setIsOpen(false)
      }
      const onSelect = (start, end) => {
        setCheckStartTime(start)
        setCheckEndTime(end)
        setIsOpen(false)

      }
      return (
        <React.Fragment>
          <button onClick={() => setIsOpen(true)}>多选日历</button>
          {
            checkStartTime && (<div>选择区间的时间：{checkStartTime.format('YYYY-MM-DD')} - {checkEndTime.format('YYYY-MM-DD')}</div>)
          }
          <Calendar
            isOpen={isOpen}
            onClose={onClose}
            onSelect={onSelect}
            isMultipleMode
          >
          </Calendar>
        </React.Fragment>
      )
  }, {
    notes: {
      markdown: Doc
    }
  })
  .add('禁用区间日历', () => {
    const [isOpen, setIsOpen] = useState(false)
    const [checkStartTime, setCheckStartTime] = useState('')
    const [checkEndTime, setCheckEndTime] = useState('')
    const [disabledStartTime, setDisabledStartTime] = useState(moment().add(7, 'days'))
    const [disabledEndTime] = useState(moment().add(11, 'days'))
    const onClose = () => {
      setIsOpen(false)
    }
    const onSelect = (start, end) => {
      setCheckStartTime(start)
      setCheckEndTime(end)
      setIsOpen(false)

    }
    return (
      <React.Fragment>
        <button onClick={() => setIsOpen(true)}>禁用区间日历</button>
        {
          checkStartTime && (<div>选择区间的时间：{checkStartTime.format('YYYY-MM-DD')} - {checkEndTime.format('YYYY-MM-DD')}</div>)
        }
        <Calendar
          isOpen={isOpen}
          onClose={onClose}
          onSelect={onSelect}
          disabledStartTime={disabledStartTime}
          disabledEndTime={disabledEndTime}
          isMultipleMode
        >
        </Calendar>
      </React.Fragment>
    )
  }, {
    notes: {
      markdown: Doc
    }
  })
  .add('渲染3个月日历', () => {
    const [isOpen, setIsOpen] = useState(false)
    const [checkStartTime, setCheckStartTime] = useState('')
    const [checkEndTime, setCheckEndTime] = useState('')
    const [disabledStartTime, setDisabledStartTime] = useState(moment().add(7, 'days'))
    const [disabledEndTime] = useState(moment().add(11, 'days'))
    const [monthCount, setMonthCount] = useState(3)
    const onClose = () => {
      setIsOpen(false)
    }
    const onSelect = (start, end) => {
      setCheckStartTime(start)
      setCheckEndTime(end)
      setIsOpen(false)

    }
    return (
      <React.Fragment>
        <button onClick={() => setIsOpen(true)}>渲染3个月日历</button>
        {
          checkStartTime && (<div>选择区间的时间：{checkStartTime.format('YYYY-MM-DD')} - {checkEndTime.format('YYYY-MM-DD')}</div>)
        }
        <Calendar
          isOpen={isOpen}
          onClose={onClose}
          onSelect={onSelect}
          disabledStartTime={disabledStartTime}
          disabledEndTime={disabledEndTime}
          isMultipleMode
          monthCount={monthCount}
        >
        </Calendar>
      </React.Fragment>
    )
  }, {
    notes: {
      markdown: Doc
    }
  })
  .add('默认可选中起始时间往后+1天', () => {
    const [isOpen, setIsOpen] = useState(false)
    const [checkStartTime, setCheckStartTime] = useState('')
    const [checkEndTime, setCheckEndTime] = useState('')
    const [startDate] = useState(moment().add(-2, 'days'))
    
    const onClose = () => {
      setIsOpen(false)
    }
    const onSelect = (start, end) => {
      setCheckStartTime(start)
      setCheckEndTime(end)
      setIsOpen(false)

    }
    return (
      <React.Fragment>
        <button onClick={() => setIsOpen(true)}>默认选中开始时间</button>
        {
          checkStartTime && (<div>选择区间的时间：{checkStartTime.format('YYYY-MM-DD')} - {checkEndTime.format('YYYY-MM-DD')}</div>)
        }
        <Calendar
          isOpen={isOpen}
          onClose={onClose}
          onSelect={onSelect}
          defaultDate={startDate}
        >
        </Calendar>
      </React.Fragment>
    )
}, {
  notes: {
    markdown: Doc
  }
})