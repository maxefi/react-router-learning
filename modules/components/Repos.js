import React from 'react'
import { Link } from 'react-router'
import NavLink from '../components/NavLink'

const Repos = (props) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <ul>
        <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
      </ul>
      <div>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="userName"
            onChange={props.onUpdateUsername}
            value={props.username}/> / {' '}
          <input
            type="text"
            placeholder="repo"
            onChange={props.onUpdateRepo}
            value={props.repo}/>{' '}
          <button type="submit">Go</button>
        </form>
      </div>
      <p>{props.username}</p>
    </div>
  )
}

module.exports = Repos
