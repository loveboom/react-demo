
import React, { Component } from 'react'

export default class Clock extends Component{
  constructor () {
    super()
    console.log('construct')
    this.state = {
      date: new Date()
    }
  }
  /* 
  componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
  shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
  componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
  componentWillUpdate()：组件开始重新渲染之前调用。
  componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
  */
  componentWillMount () {
    console.log('component will mount')
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentDidMount () {
    console.log('component did mount')
  }

  componentWillUnmount() {
    console.log('component will unmount')
    // 退出该组件时不清除会报错
    clearInterval(this.timer)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps, nextState)
    // 调用此方法必须return一个true or false,否则会报错,返回false将阻止组件更新
    return false
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render(){
      return (
          <div>
              <h1>现在的时间是</h1>
              <p>{this.state.date.toLocaleTimeString()}</p>
          </div>
      )
  }
}