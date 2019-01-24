import React, { Component } from 'react'
import Topic from './children/Topic'
import { Route, Link} from 'react-router-dom'

export default class Topics extends Component{
    render(){
        return (
            <div>
                <h1>主题列表</h1>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/1`}>
                            主题1
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/2`}>
                            主题2
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/3`}>
                            主题3
                        </Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>
            </div>
        )
    }
}