import React, { Component } from 'react';
import Child from './child/child'

export default class SetState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      word: 'Hello'
    }
  }

  handleClick (data) {
    console.log(data)
  }

  render () {
    return (
      <Child word={this.state.word} handleClick={this.handleClick.bind(this)} />
    )
  }
}