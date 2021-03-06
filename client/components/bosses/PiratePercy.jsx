import React from 'react'
import {connect} from 'react-redux'

import mapStateToProps from './utils/bossStateMap'
import BossFrame from '../frames/BossFrame'

class PiratePercy extends BossFrame {
  constructor(props) {
    super(props)
  }
  solveSpell(spells, boss) {
    const aliveTargets = this.props.party.filter(recruit => recruit.isAlive)
    let castSpell = spells.filter(spell => {
      if (!spell.onCooldown && spell.cost <= boss.mana) {
        switch(boss.stage) {
          case 'stageOne':
            switch(spell.name) {
              case 'Board Ship!': return boss.hp / boss.initHp < spell.percentage
              case 'Dynamite!': return aliveTargets.find(recruit => !recruit.effects.find(effect => effect.name == 'Bomb'))
              case 'Hook Hand!': return true
              case 'Call Polly!': return aliveTargets.length > 0
              default: return null
            }
          case 'stageTwo':
            switch(spell.name) {
              case 'Jump Ship!': return boss.armor == 0
              case 'Anchor Away!': return true
              case 'Reload!': return boss.mana < 10
              case 'Rapid Fire!': return true
              case 'Dynamite!': return aliveTargets.find(recruit => !recruit.effects.find(effect => effect.name == 'Bomb'))
              default: return null
            }
          case 'stageThree':
            switch(spell.name) {
              case 'Curse!': return aliveTargets.length > 0
              case 'Dynamite!': return aliveTargets.find(recruit => !recruit.effects.find(effect => effect.name == 'Bomb'))
              case 'Hook Hand!': return true
              case 'Call Polly!': return aliveTargets.length > 0
              default: return null
            }
          default: return null
        }
      } else return false
    })[0]
    return castSpell
  }
}

export default connect(mapStateToProps)(PiratePercy)
