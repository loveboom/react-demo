
import React,{ Component} from 'react'
import { Table } from 'element-react'

export default class Home extends Component{
  constructor () {
    super()
    this.state = {
      users: [
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ],
      columns: [
        {
          label: '名字',
          prop: 'username'
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '性别',
          prop: 'gender'
        }
      ]
    }
  }
  render () {
    return (
      <div>
          <Table
            style={{width: '100%'}}
            columns={this.state.columns}
            maxHeight={200}
            data={this.state.users}
          />
      </div>
    )
  }
}