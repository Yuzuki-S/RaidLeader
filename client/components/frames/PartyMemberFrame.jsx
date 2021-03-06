import React, {Component} from 'react'
import {connect} from 'react-redux'

import RecruitHealthBar from './RecruitHealthBar'
import EffectTag from './EffectTag'
import {ClassIcon, SpeedIcon, PowerIcon, DeadRecruitIcon, GameRecruitInfo} from '../icons/StatIcons'
import AttackIcon from './AttackIcon'
import {attackIcons} from '../../utils/classText'

import {poisonConstructor} from '../../utils/effectConstructors'

class MemberFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attackSVGs: []
    }
    this.deleteSVG = this.deleteSVG.bind(this)
    this.attackTimeout = null
  }
  deleteSVG(svg) {
    let {attackSVGs} = this.state
    this.setState({attackSVGs: attackSVGs.filter(s => s != svg)})
    this.finishCast(svg.target)
  }
  completeCast(target) {
    if (this.props.member.isAlive) {
      if (!this.props.member.effects.find(effect => effect.name == 'Stunned')) this.createSVG(target)
      this.startCast()
    }
  }
  createSVG(target) {
    var elemRect = document.getElementById('Recruit-' + this.props.member.id).getBoundingClientRect()
    var startX = elemRect.left
    var startY = elemRect.top
    const {attackSVGs} = this.state
    attackSVGs.push({
      startX,
      startY,
      info: attackIcons(this.props.member.heroClass),
      target
    })
    this.setState({attackSVGs})
  }
  startCast() {
    const {power, speed, isAlive} = this.props.member
    const {started, member, dispatch} = this.props
    if (isAlive && started) this.attackTimeout = setTimeout(() => {
      if (isAlive && started) {
        if (member.weapon_effect == 'selfPoison' && Math.random() < (1 / member.speed)) dispatch({type: 'ADD_EFFECT_TO_TARGET', target: member, effect: poisonConstructor()})
        this.completeCast()
      }
    }, 10000 / speed)
  }
  alterPower(power) {
    if (this.props.member.effects.find(effect => effect.name == 'Fury')) power *= 1.2

    return power
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.started && nextProps.started) setTimeout(() => this.startFighting(), Math.random() * 1000)
    if (nextProps.member.hp <= 0 && nextProps.member.isAlive) this.props.dispatch({type: 'MEMBER_DIED', target: this.props.member})
  }
  render() {
    const {member, dispatch, friendlyTarget, boss, party} = this.props
    const {initHp, hp, name, isAlive, effects, power, speed} = member
    let width = 70 / party.length
    // if (width > 20) width = 20
    return <div className={`column button MemberFrame ${!isAlive ? 'is-dark' : friendlyTarget == member ? 'is-success' : ''}`} style={{border: `5px ${friendlyTarget == member ? 'lightgreen' : 'black'}`,margin: '10px', marginTop: '3vh', height: '15vh', cursor: 'pointer'}} onClick={() => dispatch({type: 'SELECT_FRIENDLY_TARGET', target: member})}>
      <div className="columns is-gapless has-text-centered">
        <div className="column">
          <h1 className={`subtitle is-3`} style={{color: boss.bossTarget == member ? 'red' : 'black'}}>
            <span className="is-pulled-left">
              <GameRecruitInfo recruit={member} />
              <ClassIcon id={`Recruit-${member.id}`} heroClass={member.heroClass} />
              {!member.isAlive && <DeadRecruitIcon name={member.name} />}
            </span>
            {/* <span className="is-pulled-right">{Math.round(member.hp / member.initHp * 100)}%</span> */}
          </h1>
        </div>
        {effects.length > 0
          && <div className="column tags">
            {effects.map(effect => <EffectTag key={`effect-${effect.name}-${member.name}`} effect={effect} target={member} />)}
          </div>
          // : <div className="column is-6 is-pulled-right is-desktop-only">
          //     <p className="subtitle is-4"><PowerIcon value={Math.round(power * 10) / 10} />&nbsp;<SpeedIcon value={Math.round(speed * 10) /10} /></p>
          //     <p className="subtitle is-4"></p>
          // </div>
        }
      </div>
      {this.state.attackSVGs && this.state.attackSVGs.map((svg, i) => <AttackIcon svg={svg} deleteSVG={this.deleteSVG} key={i} />)}
      <RecruitHealthBar recruit={{...member}}  />
    </div>
  }
}

const mapStateToProps = ({started, party, friendlyTarget}) => {
  return {
    started,
    party,
    friendlyTarget
  }
}

export default MemberFrame
