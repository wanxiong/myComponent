
import { storiesOf, addDecorator, addParameters } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes'
import Doc from '../README.md';

import React, { useState, useEffect } from 'react';
import CssTranstion from '../src/index';

addDecorator(withNotes)
storiesOf('CssTranstion', module)
  .add('默认动画组件', () => {
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
        <button onClick={() => showAnimate(true)}>显示默认动画</button>
        <br/>
        <br/>
        <CssTranstion in={show}>
          <div style={demo1}>
            <br/>
            我是内容
            <br/>
            <button onClick={() => showAnimate(false)}>关闭默认动画</button>
          </div>
        </CssTranstion>
      </React.Fragment>
    )
  }, {
    notes: {
      markdown: Doc
    }
  })
  .add('右边进入动画组件', () => {
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
  })
  .add('左边进入动画组件', () => {
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
        <button onClick={() => showAnimate(true)}>左边进入动画</button>
        <br/>
        <br/>
        <CssTranstion in={show} classNames={'wrc-default-slide-right'}>
          <div style={demo1}>
            <br/>
            我是内容
            <br/>
            <button onClick={() => showAnimate(false)}>关闭动画</button>
          </div>
        </CssTranstion>
      </React.Fragment>
    )
  })
  .add('顶部进入动画组件', () => {
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
        <button onClick={() => showAnimate(true)}>顶部进入动画</button>
        <br/>
        <br/>
        <CssTranstion in={show} classNames={'wrc-default-slide-bottom'}>
          <div style={demo1}>
            <br/>
            我是内容
            <br/>
            <button onClick={() => showAnimate(false)}>关闭动画</button>
          </div>
        </CssTranstion>
      </React.Fragment>
    )
  })
  .add('不需要进入动画组件', () => {
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
        <button onClick={() => showAnimate(true)}>不需要进入动画</button>
        <br/>
        <br/>
        <CssTranstion in={show} classNames={'null'}>
          <div style={demo1}>
            <br/>
            我是内容
            <br/>
            <button onClick={() => showAnimate(false)}>关闭动画</button>
          </div>
        </CssTranstion>
      </React.Fragment>
    )
  })
  .add('fadeIn进入动画组件', () => {
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
        <button onClick={() => showAnimate(true)}>fadeIn进入动画</button>
        <br/>
        <br/>
        <CssTranstion in={show} classNames={'wrc-default-fade-in'}>
          <div style={demo1}>
            <br/>
            我是内容
            <br/>
            <button onClick={() => showAnimate(false)}>关闭动画</button>
          </div>
        </CssTranstion>
      </React.Fragment>
    )
  })