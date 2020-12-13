
> 移动端弹出日历

* 支持选择1个时间和区间时间
* 支持起始时间和结束时间
* 支持渲染日历的月数

### 在线链接
[查看链接](https://wanxiong.github.io/myComponent/storybook-static/index.html?path=/story/calendar--%E5%8D%95%E9%80%89%E6%97%A5%E5%8E%86)

### API
###### 属性如下

| 参数 | 说明 | 类型 | 默认值 |
| :-----| :----: | :----: | ----: |
| isOpen  | 是否显示日历 |  Boolean  | false |
| onClose  | 点击关闭的回调函数 | Function | function |
| onSelect | 日历控件点击确定的回调 | function | function |
| onSelect | 日历控件点击确定的回调 | function | function |
| isMultipleMode | 是否多选日历,多选可以选择开始和结束时间 | Boolean | false |
| disabledStartTime | 静止选择之前的时间 | Date | null |
| disabledEndTime | 静止选择之后的时间 | Date | null |
| monthCount | 渲染的日历月数 | Number | 1 |
| defaultDate | 日历的可点击时间+1 | Date | new Date |
| footerRender | 自定义日历的底部按钮区域 | function 返回 react Element | function |
| headerRender | 自定义日历的头部区域 | function 返回 react Element，当前函数的参数是每个月的monthArr数组 | function |
| contentRender | 自定义日历的内容区域 | function 返回 react Element |  |
| dateCellRender | 自定义日历的内每一项天的回调函数 | function 返回 react Element，当前函数的参数item, index | function |

# 单选日历
#### 示例代码
```js
import React, { useState, useEffect } from 'react';
import Calendar from 'Calendar';
import moment from 'moment';
function () => {
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
}
```

# 多选日历
```js
import React, { useState, useEffect } from 'react';
import Calendar from 'Calendar';
import moment from 'moment';
function () => {
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
}
```

# 禁用区间日历
```js
import React, { useState, useEffect } from 'react';
import Calendar from 'Calendar';
import moment from 'moment';
function () => {
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
}
```

# 渲染3个月日历
```js
import React, { useState, useEffect } from 'react';
import Calendar from 'Calendar';
import moment from 'moment';
function () => {
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
}
```

# 默认可选中起始时间往后+1天
```js
import React, { useState, useEffect } from 'react';
import Calendar from 'Calendar';
import moment from 'moment';
function () => {
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
}
```