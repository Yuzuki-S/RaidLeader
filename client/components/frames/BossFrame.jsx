import React, {Component} from 'react'
import {connect} from 'react-redux'

import HealthBar from './HealthBar'
import ManaBar from './ManaBar'

class BossFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manaInterval: null,
      armorInterval: null
    }
  }
  startTicking(dispatch) {
    console.log("start ticking");
    let manaInterval = setInterval(() => dispatch({type: 'BOSS_GAIN_MANA', amount: 1}), 1000 * this.props.boss.manaRegen)
    let armorInterval = setInterval(() => dispatch({type: 'BOSS_GAIN_ARMOR', amount: 1}), 1000 * this.props.boss.armorRegen)
    this.setState({manaInterval, armorInterval})
  }
  componentWillReceiveProps(nextProps) {
    console.log({nextProps});
    if (!this.props.started && nextProps.started) this.startTicking(nextProps.dispatch)
  }
  render() {
    const {boss} = this.props
    console.log({boss});
    const {name, hp, initHp, mana, maxMana, armor, initArmor} = boss
    return <div className="section BossFrame">
      <div className="columns">
        <div className="column is-4 has-text-centered">
          <h1 className="title is-2">{name}</h1>

        </div>
        <div className="column is-4">
          <ManaBar mana={mana} maxMana={maxMana} />
        </div>
        <div className="column is-4">
          <h1 className="title is-3">Armor: {armor}/{initArmor}</h1>
        </div>
      </div>
      <HealthBar hp={hp} maxHP={initHp} />
    </div>
  }
}

const mapStateToProps = ({boss, started}) => {
  return {
    boss,
    started
  }
}

export default connect(mapStateToProps)(BossFrame)
