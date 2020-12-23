
> 移动端弹出层动画组件

* 支持自定义入场、离场组件动画
* 默认提供几种入场动画

### 在线链接
[查看链接](https://wanxiong.github.io/myComponent/storybook-static/index.html?path=/story/csstranstion--默认动画组件)

### 基于react-transition-group二次封装
[查看链接](https://github.com/reactjs/react-transition-group)

### API
###### 属性如下
| 参数 | 说明 | 类型 | 默认值 |
| :-----| :----: | :----: | ----: |
| classNames  | 进场离场的动画名称 |  String  | wrc-default-slide-top |
| children  | 需要动画的组件 | React Element | 必须 |
| duration | 动画时长 | Number/毫秒 | 400 |
| unmountOnExit | 退出时移除dom | Boolean | true |
| ...restProps | 其他参数 |  |  |


# 单选日历
#### 示例代码
```js
import React, { useState, useEffect } from 'react';
import CssTranstion from 'CssTranstion';

export default function () {
  const [show, setShow] = useState(false)
  const showAnimate = (bool) => {
    setShow(bool)
  }
  const demo1 = {
    position: `absolute`,
    top: `0`,
    left: `0`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgba(0,0,0, 0.5)`,
    color: `#fff`,
    padding: `20px`
  }

  return (
    <React.Fragment>
      <button onClick={() => showAnimate(true)}>右边进入动画</button>
      <br/>
      <br/>
      <CssTranstion in={show} classNames={'wrc-default-slide-left'}>
        <div style={demo1}>
          <br/>
          我是内容
          <br/>
          <button onClick={() => showAnimate(false)}>关闭动画</button>
        </div>
      </CssTranstion>
    </React.Fragment>
  )
}
```
