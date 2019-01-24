import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import 'element-theme-default';
import Events from './events/Events';
import About from './about/About';
import Topics from './topics/Topics';
import SetState from './setState';
import Props from './props';
import MapListA from './mapList-element';
import MapListB from './mapList';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/about'>普通组件（element-ui使用）</Link></li>
                    <li><Link to='/topics'>嵌套路由</Link></li>
                    <li><Link to='/'>事件绑定</Link></li>
                    <li><Link to='/setState'>SetState</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                    <li><Link to='/mapListA'>list循环(element-ui的table使用案例)</Link></li>
                    <li><Link to='/mapListB'>list循环(react)</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Events} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/setState" component={SetState} />
                <Route path="/props" component={Props} />
                <Route path="/mapListA" component={MapListA} />
                <Route path="/mapListB" component={MapListB} />
            </div>
        </Router>
    );
  }
}

export default App;
