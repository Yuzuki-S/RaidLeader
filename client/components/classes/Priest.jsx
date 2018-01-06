import React from 'react'
import PartyMemberFrame from '../frames/PartyMemberFrame'
import {connect} from 'react-redux'

class Priest extends PartyMemberFrame {
  finishCast(power, target) {
    if (!target) this.props.dispatch({type: 'SPECIAL_ATTACK_BOSS', power: power * 2})
    else this.props.dispatch({type: 'HEAL_FRIENDLY_TARGET', target, power})
    this.startCast()
  }
  startCast() {
    const {power, speed} = this.props.member
    const {party} = this.props
    let target = null
    party.forEach(member => {
      if (!target && member.hp < member.initHp) target = member
      else if (target && member.initHp - member.hp > target.initHp - target.hp) target = member
    })
    setTimeout(() => this.finishCast(power, target), 10000 / speed)
  }
  startFighting () {
    const {heroClass, power, speed, initHp} = this.props.member
    this.props.dispatch({type: 'PRIEST_START_BUFF', hp: initHp / 2})
    this.startCast();
  }
}

const mapStateToProps = ({started, party, friendlyTarget}) => {
  return {
    started,
    party,
    friendlyTarget
  }
}

export default connect(mapStateToProps)(Priest)
