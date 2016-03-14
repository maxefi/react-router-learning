import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import NavLink from './NavLink'
require('../../public/index.css')

export default React.createClass({
  render() {
    return (
      <div className='container_main'>
        <h1>React Router Tutorial</h1>
        <div className="col-sm-6">
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            <NavLink to="/playerOne">
              <button type="button" className="btn btn-lg btn-success">VK-battle</button>
            </NavLink>
          </div>
        </div>
        <div className="col-sm-12 text-center">
          <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
});
