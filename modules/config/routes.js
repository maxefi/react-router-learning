import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../App'
import About from '../About'
import Repos from '../Repos'
import Repo from '../Repo'
import Home from '../Home'
import PromptContainer from '../containers/PromptContainer'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/playerOne" header="Player One" component={PromptContainer}/>
    <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}/>
  </Route>
)
