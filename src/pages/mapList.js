
import React,{ Component} from 'react'
import ListItem from './child/listItem'

export default class Home extends Component{
  constructor () {
    super()
    this.state = {
      users: [
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ]
    }
  }
  render () {
    const users = this.state.users
    return (
      <ul>
          {users.map((user, index) =>
            <ListItem user={user} key={index} />
          )}
      </ul>
    )
  }
}