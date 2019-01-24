
import React, { Component } from 'react'
import { Button } from 'element-react'

export default class Child extends Component{
  constructor (props) {
    super(props)
    this.state = {
      title: '子组件'
    }
  }

  propClick (title) {
    this.props.handleClick(title)
  }

  render(){
    return (
      <Button type="primary" onClick={this.propClick.bind(this, this.state.title)}>{this.props.word}</Button>
    )
  }
}