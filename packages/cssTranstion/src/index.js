import React from 'react';
import { CSSTransition } from 'react-transition-group'; 
import './index.less';

/**
 * @params  { String classNames} 动画名称
 * @params  { React.Element children} 包裹的内容组件
 * @params  { Number duration} 动画时长
 * @params  { Boolean unmountOnExit} 退出时移除dom
 * @params  { restProps} 其他参数
 * 
 * */
export default function cssTranstion ({
  classNames = 'wrc-default-slide-top',
  children,
  duration = 300,
  unmountOnExit = true,
  ...restProps
}) {


  return (
    <CSSTransition timeout={duration} classNames={classNames} unmountOnExit {...restProps}>
      {children}
    </CSSTransition>
  )
}