import React from 'react'
import {connect} from 'react-redux'

import mapStateToProps from './utils/bossStateMap'
import BossFrame from '../frames/BossFrame'

class SeepingSlime extends BossFrame {
  constructor(props) {
    super(props)
  }
  solveSpell(spells, boss) {
    let castSpell = spells.filter(spell => {
      if (!spell.onCooldown && spell.cost <= boss.mana) {
        switch (spell.name) {
          case 'Regenerate':
            return (boss.armor == 0 && boss.hp <= 50)
          case 'Seep': return boss.hp > 10
          case 'Poison': return true
          default: return false
        }
      } else return false
    })[0]
    return castSpell
  }
}

export default connect(mapStateToProps)(SeepingSlime)