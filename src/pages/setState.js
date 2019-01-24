import React, { Component } from 'react';

export default class SetState extends Component {
  constructor () {
    super()
    this.state = {
      status: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      status: !this.state.status
    })
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.state.status ? '关闭' : '开启'}
      </div>
    )
  }
}