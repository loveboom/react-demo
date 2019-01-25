
import React,{ Component} from 'react'

export default class Home extends Component{
  // constructor () {
  //   super()
  //   this.handleClickOnTitle = this.handleClickOnTitle.bind(this)
  // }

  // handleClickOnTitle (e) {
  //   console.log(this, e)
  // }

  // render () {
  //   return (
  //     <div>
  //         <h1 onClick={this.handleClickOnTitle}>主页</h1>
  //     </div>
  //   )
  // }

  // 传参用下面这种
  handleClickOnTitle (word, e) {
    console.log(this, word, e)
  }

  render () {
    return (
      <div>
          <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>点我看console.log</h1>
      </div>
    )
  }
}