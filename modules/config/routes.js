import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import About from '../components/About'
import ReposContainer from '../containers/ReposContainer'
import Repo from '../components/Repo'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" header="Repos" component={ReposContainer}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/playerOne" header="Player One" component={PromptContainer}/>
    <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}/>
    <Route path="/battle" component={ConfirmBattleContainer}/>
  </Route>
)
