import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'



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
          {this.props.children}
        </div>
      </div>
    )
  }
});
