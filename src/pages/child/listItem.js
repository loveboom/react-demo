
import React,{ Component} from 'react'

export default class ListItem extends Component{
  render () {
    const { user } = this.props
    return (
      <li>
        <i>姓名：{user.username}</i>
        <i>年龄：{user.age}</i>
        <i>性别：{user.gender}</i>
      </li>
    )
  }
}