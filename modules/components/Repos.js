import React from 'react'
import { Link } from 'react-router'
import NavLink from '../components/NavLink'

const Repos = (props) => {
  return (
    <div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
      </ul>
      <div>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="userName"
            value={props.userName}/> / {' '}
          <input
            type="text"
            placeholder="repo"
            value={props.repo}/>{' '}
          <button type="submit">Go</button>
        </form>
      </div>
      {props.children}
    </div>
  )
}

module.exports = Repos
