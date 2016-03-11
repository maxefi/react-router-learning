import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // 1
  getInitialState() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  // 2
  componentWillMount() {
    console.log('componentWillMount');
  },

  // 4
  componentDidMount() {
    const query = this.props.location.query;
    console.log('componentDidMount');
    // Fetch info from VK then update state
  },

  // 5
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  },

  // 6
  componentWillMount() {
    console.log('componentWillMount');
  },

  // 3
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}/>
    )
  }
});
