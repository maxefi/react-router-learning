import React from 'react'

import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: []
    }
  },

  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          isLoading: false,
          scores: scores
        })
      }.bind(this))
  },

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}/>
    );
  }
})
