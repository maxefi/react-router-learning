import React from 'react'
import Repos from '../components/Repos'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      userName: '',
      repo: ''
    }
  },

  handleUpdateUsername(e) {
    this.setState({
      userName: e.target.value
    })
  },

  handleUpdateRepo(e) {
    this.setState({
      repo: e.target.value
    })
  },

  handleSubmit(e) {
    e.preventDefault()
    const userName = this.state.userName
    const repo = this.state.repo
    this.setState({
      userName: '',
      repo: ''
    });

    const path = '/repos/' + userName + '/' + repo
    this.context.router.push(path)
    console.log(path)
  },

  render() {
    return (
      <Repos
        onUpdateUsername={this.handleUpdateUsername}
        onUpdateRepo={this.handleUpdateRepo}
        onSubmit={this.handleSubmit}
        header={this.props.route.header}
        username={this.state.userName}
        repo={this.state.repo}/>
    )
  }
})
