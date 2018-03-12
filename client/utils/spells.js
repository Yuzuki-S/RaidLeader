var colors = {
  lightGreen: '#00FF7F',
  medGreen: '#00C957',
  darkGreen: '#008B45',
  lightOlive: '#C0FF3E',
  darkOlive: '#6E8B3D',
  medOlive: '#A2CD5A',
  medOrange: '#FFA500',
  darkOrange: '#FF7F24',
  lightRed: '#EE5C42',
  medRed: '#EE4000',
  darkRed: '#EE4000',
  lightOrange: '#FFC125',
  medBlue: '#7171C6',
  darkBlue: '#00688B',
  lightBlue: '#7D9EC0',
  lightPurple: '#9370DB',
  darkPurple: '#7D26CD',
  medPurple: '#6A5ACD',
  medYellow: '#EEEE00',
  lightYellow: '#FFF68F',
  darkYellow: '#FFD700',
  medGrey: '#AAAAAA',
  faintPink: '#DDA0DD'
}

module.exports = {
  'Lesser Heal': {
    id: 1,
    name: 'Lesser Heal',
    cast: 1,
    cost: 5,
    coolDown: 0.5,
    type: 'Heal',
    singleTarget: true,
    powerRatio: 0.5,
    description: 'Heal a Friendly Target for (50%) of Player Power',
    icon: 'ra-flower',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Heal': {
    id: 2,
    name: 'Heal',
    cast: 2,
    cost: 10,
    coolDown: 0.5,
    type: 'heal',
    singleTarget: true,
    powerRatio: 1,
    description: 'Heal a Friendly Target for (100%) of Player Power',
    icon: 'ra-daisy',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Greater Heal': {
    id: 3,
    name: 'Greater Heal',
    cast: 5,
    cost: 10,
    coolDown: 0.5,
    type: 'heal',
    singleTarget: true,
    powerRatio: 3,
    description: 'Heal a Friendly Target for (200%) of Player Power',
    icon: 'ra-flowers',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Healing Ring': {
    id: 4,
    name: 'Healing Ring',
    cast: 3,
    cost: 10,
    coolDown: 5,
    type: 'heal',
    singleTarget: false,
    powerRatio: 1,
    description: "Heal ALL Friendly Characters for (100%) of Player Power",
    icon: 'ra-grass-patch',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Bind': {
    id: 5,
    name: 'Bind',
    cast: 0,
    cost: 15,
    coolDown: 10,
    type: 'heal',
    singleTarget: true,
    powerRatio: 2,
    description: 'Heal a Friendly Character and the Player for (200%) of Player Power',
    icon: 'ra-level-two',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Fireball': {
    id: 6,
    name: 'Fireball',
    cast: 5,
    cost: 10,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    powerRatio: 3,
    description: "Damage the Boss for (300%) of Player Power",
    icon: 'ra-burning-meteor',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Fireblast': {
    id: 7,
    name: 'Fireblast',
    cast: 2.5,
    cost: 10,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    description: 'Damage the Boss for (%200) of Player Power',
    icon: 'ra-blaster',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Flash Fire': {
    id: 8,
    name: 'Flash Fire',
    cast: 0,
    cost: 10,
    coolDown: 10,
    type: 'damage',
    singleTarget: false,
    powerRatio: 1,
    description: 'Damage the Boss for (%100) of Player Power',
    icon: 'ra-explosion',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Life Tap': {
    id: 9,
    name: 'Life Tap',
    cast: 0,
    cost: 0,
    coolDown: 10,
    type: 'special',
    singleTarget: false,
    powerRatio: 3,
    mana: 10,
    description: 'Lose (5%) hp, 10 mana',
    icon: 'ra-cut-palm',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Fire'
  },
  'Evocate': {
    id: 10,
    name: 'Evocate',
    cast: 5,
    cost: 0,
    coolDown: 0,
    type: 'special',
    singleTarget: false,
    powerRatio: 10,
    description: 'Restore 10% Mana',
    icon: 'ra-player-teleport',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Drain Life': {
    id: 11,
    name: 'Drain Life',
    cast: 3,
    cost: 0,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    isChanneled: true,
    ticks: 3,
    tickPower: 0.5,
    powerRatio: 1,
    description: "Damage the Boss for (%50) of Player Power and Heal the Player for (%100) of Damage done. Occurs 3 times during spell cast",
    icon: 'ra-droplet',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Harvest Life': {
    id: 12,
    name: 'Harvest Life',
    cast: 5,
    cost: 20,
    coolDown: 15,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    description: 'Damage the Boss for (%200) of Player Power, Heal ALL Friendly Characters for (%200) of Player Power',
    icon: 'ra-defibrilate',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Drain Soul': {
    id: 13,
    name: 'Drain Soul',
    cast: 5,
    cost: 0,
    coolDown: 0,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    mana: 5,
    description: 'Damage the Boss for (100%) of Player Power, Heal the Player for (100%) of the Damage done and restores 5 Mana to the Player',
    icon: 'ra-bleeding-hearts',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Renew': {
    id: 14,
    name: 'Renew',
    cast: 0,
    cost: 5,
    coolDown: 0.5,
    type: 'healing',
    singleTarget: true,
    powerRatio: 0.5,
    description: 'Place a Healing over Time effect on a friendly target, healing them for 60% of their Max Health over 15 seconds',
    icon: 'ra-sprout',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Greater Renew': {
    id: 15,
    name: 'Greater Renew',
    cast: 3,
    cost: 20,
    coolDown: 15,
    type: 'healing',
    powerRatio: 0.5,
    singleTarget: false,
    description: 'Place a Healing over Time effect on each friendly party member, healing them for 60% of their Max Health over 15 seconds',
    icon: 'ra-sprout-emblem',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Siphon Life': {
    id: 16,
    name: 'Siphon Life',
    cast: 3,
    cost: 10,
    coolDown: 10,
    type: 'healing',
    powerRatio: 4,
    tickPower: 2 / 3,
    ticks: 3,
    singleTarget: false,
    isChanneled: true,
    description: 'Damage ALL friendly characters for 200% Player Power over 3 seconds, then heal ALL friendly characters for 400% Player Power',
    icon: 'ra-player-lift',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Tranquility': {
    id: 17,
    name: 'Tranquility',
    cast: 10,
    cost: 25,
    coolDown: 30,
    type: 'healing',
    powerRatio: 1,
    tickPower: 0.5,
    ticks: 10,
    singleTarget: false,
    isChanneled: true,
    description: 'Heal ALL friendly characters for 500% Player Power over 10 seconds. When the cast is finished, Heal All friendly characters for 100% Player Power and remove ALL effects from ALL friendly recruits',
    icon: 'ra-fairy',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Ring of Fire': {
    id: 18,
    name: 'Ring of Fire',
    cast: 3,
    cost: 10,
    coolDown: 10,
    type: 'damage',
    powerRatio: 2,
    tickPower: 1 / 3,
    ticks: 3,
    singleTarget: false,
    isChanneled: true,
    description: 'Damage ALL characters for 100% Player Power over 3 seconds, then Damage the Boss for 200% Player Power',
    icon: 'ra-fire-ring',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Purge': {
    id: 19,
    name: 'Purge',
    cast: 0.5,
    cost: 0,
    coolDown: 5,
    type: 'support',
    powerRatio: 0,
    singleTarget: true,
    mana: 5,
    description: 'Remove ALL effects from a friendly Recruit, restore 5 mana for each Effect removed',
    icon: 'ra-cancel',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Restore': {
    id: 20,
    name: "Restore",
    cast: 3,
    cost: 15,
    coolDown: 15,
    type: 'healing',
    powerRatio: 1,
    tickPower: 0.5,
    description: "Heal a friendly target for (150%) Player Power over 3 seconds, and then apply a Renew effect to the Target (if the target is a recruit). (Renew restores 60% of the target's Max Health over 15 seconds)",
    icon: 'ra-crowned-heart',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Calibrate': {
    id: 21,
    name: 'Calibrate',
    cast: 2,
    cost: 0,
    coolDown: 10,
    type: 'support',
    powerRatio: 1,
    singleTarget: false,
    description: "Set the % Health of ALL recruits to the average % Health of your Party",
    icon: 'ra-circle-of-circles',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Drain Mana': {
    id: 22,
    name: 'Drain Mana',
    cast: 2,
    cost: 0,
    coolDown: 10,
    type: 'support',
    powerRatio: 0,
    singleTarget: false,
    max: 5,
    percentage: 0.3,
    description: 'Steal up to 5 Mana from the Boss. If you have no Life Spells, Heal ALL Recruits for 30% of their Max Health',
    icon: 'ra-reverse',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Cauterize': {
    id: 23,
    name: 'Cauterize',
    cast: 3,
    cost: 5,
    coolDown: 5,
    singleTarget: true,
    isChanneled: true,
    ticks: 3,
    tickPower: 1,
    tickPercentage: 0.1,
    percentage: 0.5,
    greaterPercentage: 0.7,
    description: 'Damage a target Recruit for 30% Max Health over 3 seconds, then heal the target for %50 of Max Health. If you have no Life Spells, heal for %70 instead.',
    icon: 'ra-heartburn',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Alignment': {
    id: 24,
    name: 'Alignment',
    cast: 3,
    cost: 10,
    coolDown: 15,
    singleTarget: false,
    percentage: 30,
    greaterPercentage: 50,
    description: 'Set ALL Recruits to 30% of their Max Health. If you have no Life Spells, set them to 50% Health instead.',
    icon: 'ra-gear-heart',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  }
}

// 'Guardian Angel': {
//   id: 21,
//   name: 'Guardian Angel',
//   cast: 5,
//   cost: 10,
//   coolDown: 20,
//   type: 'support',
//   powerRatio: 2,
//   tickPower: 2,
//   ticks: 10,
//   singleTarget: true,
//   description: 'Set your focus on a recruit. If the recruit dies during the spell cast, return it to life with Health equal to (200%) Player Power. If the Recruit is still alive at the end of the cast, heal the recruit for (200%) Player Power',
//   icon: 'ra-angel-wings',
//   color: colors.lightOlive,
//   background: colors.darkGreen,
//   element: 'Life'
// }
