export default {
  name: 'Cycling Conveyer',
  level: 3,
  initHp: 2000,
  hp: 2000,
  initPower: 0,
  power: 0,
  initArmor: 2500,
  armor: 2500,
  mana: 0,
  maxMana: 200,
  manaRegen: 0,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: `Entering a room, you find a Massive Conveyer Belt. A massive sign is hanging above it. "WARNING! CONVEYER MALFUNCTIONING, KEEP OUT. AND PLEASE DON'T REACTIVATE IT!"`,
  weaponRewards: ['Polarizing Stick', 'Lightning Rod', 'Power Drill'],
  goldReward: 700,
  expReward: 1200,
  weaponChance: 1,
  progress_required: 0,
  icon: ' ra-overdrive',
  stage: 'stageZero',
  spells: [
    {
      name: 'Activate',
      cost: 0,
      cast: 5,
      coolDown: 1,
      powerRatio: 0,
      tickPower: 0,
      type: 'damage',
      singleTarget: false,
      isChanneled: true,
      ticks: 5,
      power: 10,
      stage: 'stageOne',
      onCooldown: false,
      description: "Start Stage 1, gain 10 Power 5 times during the cast",
      icon: 'ra-lever'
    }
  ],
  stageOne: {
    stage: 'stageOne',
    description: 'During Stage 1 the Conveyer will gain 1 mana per second and have a new set of spells, these spells are focused on dealing damage to ALL recruits.',
    manaRegen: 1,
    spells: [
      {
        name: 'Recharge',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        singleTarget: false,
        powerRatio: 50,
        mana: 25,
        onCooldown: false,
        description: 'Gain 25 Mana',
        icon: 'ra-energise'
      },
      {
        name: 'Short Circuit',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        singleTarget: false,
        powerRatio: 1,
        tickPower: 1,
        onCooldown: false,
        percentage: 50,
        description: 'Set ALL recruits to 50% of their Max Health',
        icon: 'ra-lightning-arc'
      },
      {
        name: 'Discharge',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        isChanneled: true,
        singleTarget: false,
        onCooldown: false,
        tickPower: 0.1,
        powerRatio: 1,
        ticks: 10,
        tickPercentage: 0.05,
        description: 'Damage ALL recruits for 50% of their Max Health over the cast',
        icon: 'ra-chain-lightning'
      },
      {
        name: 'Change Gears',
        manaRequired: 200,
        cast: 2,
        cost: 0,
        coolDown: 1000,
        onCooldown: false,
        singleTarget: false,
        powerRatio: 1,
        stage: 'stageTwo',
        description: 'Change to Stage 2. If at 200 Mana, change to Stage 3 instead',
        icon: 'ra-anticlockwise-rotation'
      }
    ]
  },
  stageTwo: {
    stage: 'stageTwo',
    description: 'During Stage 2 the Conveyer will cast focused on dealing direct damage, casting spells from right to left',
    manaRegen: 1,
    spells: [
      {
        name: 'Change Gears',
        manaRequired: 200,
        cast: 2,
        cost: 0,
        coolDown: 1000,
        onCooldown: false,
        singleTarget: false,
        powerRatio: 1,
        stage: 'stageOne',
        description: 'Change to Stage 1. If at 200 Mana, change to Stage 3 Instead',
        icon: 'ra-clockwise-rotation'
      },
      {
        name: 'Power Drill',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        powerRatio: 1,
        tickPower: 0.3,
        ticks: 5,
        isChanneled: true,
        onCooldown: false,
        singleTarget: true,
        description: "Damage the Boss' Target for (150%) Power during the cast",
        icon: 'ra-drill'
      },
      {
        name: 'Payload',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        powerRatio: 1,
        onCooldown: false,
        singleTarget: true,
        description: "Damage the Boss' Target and the Player for (100%) Boss Power",
        icon: 'ra-cogsplosion'
      },
      {
        name: 'Power Up',
        cast: 5,
        cost: 0,
        coolDown: 1000,
        type: 'damage',
        singleTarget: false,
        powerRatio: 50,
        power: 10,
        onCooldown: false,
        description: 'Gain 20 Power',
        icon: 'ra-tesla-coil'
      }
    ]
  },
  stageThree: {
    stage: 'stageThree',
    description: 'During Stage 3 the Conveyer will stop gaining mana every second, and will use a mix of spells from the previous stages.',
    manaRegen: 0,
    spells: [
      {
        name: 'Repair',
        cast: 10,
        cost: 10,
        coolDown: 20,
        type: 'support',
        powerRatio: 1,
        power: 20,
        mana: 20,
        armor: 200,
        isChanneled: true,
        ticks: 10,
        onCooldown: false,
        singleTarget: false,
        description: "The Boss gains 20 Power, 20 Mana and restores 200 Armor during the cast of this spell",
        icon: 'ra-auto-repair'
      },
      {
        name: 'Discharge',
        cast: 5,
        cost: 10,
        coolDown: 20,
        type: 'damage',
        isChanneled: true,
        singleTarget: false,
        onCooldown: false,
        tickPower: 0.1,
        powerRatio: 1,
        ticks: 10,
        tickPercentage: 0.05,
        description: 'Damage ALL recruits for 50% of their Max Health over the cast',
        icon: 'ra-chain-lightning'
      },
      {
        name: 'Power Drill',
        cast: 5,
        cost: 0,
        coolDown: 20,
        type: 'damage',
        powerRatio: 1,
        tickPower: 0.3,
        ticks: 5,
        isChanneled: true,
        onCooldown: false,
        singleTarget: true,
        description: "Damage the Boss' Target for (150%) Power over the cast",
        icon: 'ra-drill'
      },
      {
        name: 'Speed Up',
        cast: 5,
        cost: 20,
        coolDown: 20,
        powerRatio: 1,
        percentage: 0.1,
        onCooldown: false,
        singleTarget: false,
        description: 'Reduce the Cast Time and Cooldown of ALL Boss Spells by 10%',
        icon: 'ra-twirl-center'
      }
    ]
  }
}
