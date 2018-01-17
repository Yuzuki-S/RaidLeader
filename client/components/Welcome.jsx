import React, {Component} from 'react'
import {connect} from 'react-redux'

import createClass from '../utils/createClass'
import {getStarted} from '../actions/welcome'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 1,
      paladinName: 'Random Name'
    }
    this.nextStage = this.nextStage.bind(this)
    this.getStarted = this.getStarted.bind(this)
  }
  nextStage () {
    this.setState({stage: this.state.stage + 1})
  }
  getStarted() {
    this.props.dispatch(getStarted(this.state.paladinName))
  }
  stageOne() {
    return <div className="section has-text-centered">
      <p className="title is-1">Welcome!</p>
      <div className="content is-large">You are about to begin your journey.</div>
      <div className="content is-large">I'm not gonna tell you how to play this thing, you can figure that out for yourself.</div>
      <div className="content is-large">I can however, get you started...</div>
      <button className="button is-large is-success" onClick={this.nextStage}>Exciting!</button>
    </div>
  }
  stageTwo() {
    const {paladinName} = this.state
    return <div className="section has-text-centered">
      <p className="title is-1">Great News!</p>
      <p className="content is-large">"{paladinName}" the Paladin wants to join your party!</p>
      <p className="content is-large">He will help you on your journey, but first you must help him SLAY A DRAGON!</p>
      <p className="content is-large"></p>
      <button className="button is-large is-success" onClick={this.nextStage}>Great!</button>
    </div>
  }
  stageThree() {
    const {paladinName} = this.state
    return <div className="section has-text-centered">
      <p className="title is-1">{paladinName} the Paladin joins your party!</p>
      <p className="content is-large">"{paladinName}" is going to help you defeat the Dragon, but they are going to take quite a beating.</p>
      <p className="content is-large">So I'm going to teach you a spell, "Lesser Heal" to help keep them alive</p>
      <button className="button is-large is-success" onClick={this.nextStage}>Cool! Thanks!</button>
    </div>
  }
  stageFour() {
    return <div className="section has-text-centered">
      <p className="title is-1">You learned the spell "Lesser Heal"!</p>
      <p className="content is-large">...And that's all you need to get started!</p>
      <p className="content is-large">I will drop you off in "Town".</p>
      <p className="content is-large">From there, open up your "Dungeon Map" and Travel to "The Hunt" for your first encounter.</p>
      <p className="content is-large">Good Luck!</p>
      <button onClick={this.getStarted} className="button is-large is-success">I'm sure I'll need it!</button>
    </div>
  }
  stageSwitch() {
    const {stage} = this.state
    switch (stage) {
      case 1: return this.stageOne()
      case 2: return this.stageTwo()
      case 3: return this.stageThree()
      case 4: return this.stageFour()
    }
  }
  render() {
    return <div>
      {this.stageSwitch()}
    </div>
  }
}

export default connect()(Welcome)