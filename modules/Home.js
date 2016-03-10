import React from 'react'
import { transparentBg } from './styles/styles'

export default React.createClass({
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Click things, do the battle</h1>
        <p className="lead">fancy slogan</p>
      </div>
    )
  }
})
