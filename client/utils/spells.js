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
    icon: 'ra-lotus-flower',
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
    element: 'Life',
    reserved: true
  },
  'Greater Heal': {
    id: 3,
    name: 'Greater Heal',
    cast: 4,
    cost: 10,
    coolDown: 0.5,
    type: 'heal',
    singleTarget: true,
    powerRatio: 3,
    description: 'Heal a Friendly Target for (200%) of Player Power',
    icon: 'ra-vine-flower',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Healing Ring': {
    id: 4,
    name: 'Healing Ring',
    cast: 4,
    cost: 15,
    coolDown: 5,
    type: 'heal',
    singleTarget: false,
    powerRatio: 1,
    description: "Heal ALL Friendly Characters for (100%) of Player Power",
    icon: 'ra-flower-twirl',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Bind': {
    id: 5,
    name: 'Bind',
    cast: 1,
    cost: 15,
    coolDown: 10,
    type: 'heal',
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 2,
    description: 'Heal a Friendly Recruit and the Player for (200%) of Player Power',
    icon: 'ra-tentacle-strike',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Fireball': {
    id: 6,
    name: 'Fireball',
    cast: 5,
    cost: 8,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    description: "Damage the Boss for (200%) of Player Power",
    icon: 'ra-burning-meteor',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Fireblast': {
    id: 7,
    name: 'Fireblast',
    cast: 3,
    cost: 6,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    powerRatio: 1,
    description: 'Damage the Boss for (100%) of Player Power',
    icon: 'ra-ember-shot',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire',
    reserved: true
  },
  'Flash Fire': {
    id: 8,
    name: 'Flash Fire',
    cast: 1,
    cost: 4,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    powerRatio: 0.5,
    description: 'Damage the Boss for (50%) of Player Power',
    icon: 'ra-fireflake',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Life Tap': {
    id: 9,
    name: 'Life Tap',
    cast: 1,
    cost: 0,
    coolDown: 1,
    type: 'special',
    singleTarget: false,
    powerRatio: 1,
    mana: 5,
    description: 'Damage the Player for (100%) Player Power, gain 5 mana',
    icon: 'ra-cut-palm',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow',
    reserved: true
  },
  'Evocate': {
    id: 10,
    name: 'Evocate',
    cast: 2,
    cost: 0,
    coolDown: 15,
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
    cost: 10,
    coolDown: 5,
    type: 'damage',
    singleTarget: false,
    isChanneled: true,
    ticks: 3,
    tickPower: 0.5,
    powerRatio: 1,
    description: "Damage the Boss and Heal the Player for (%150) of Player Power during the cast",
    icon: 'ra-life-tap',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Harvest Life': {
    id: 12,
    name: 'Harvest Life',
    cast: 5,
    cost: 20,
    coolDown: 20,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    description: 'Damage the Boss and Heal ALL Friendly Characters for (%200) of Player Power',
    icon: 'ra-energy-breath',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Drain Soul': {
    id: 13,
    name: 'Drain Soul',
    cast: 5,
    cost: 0,
    coolDown: 10,
    type: 'damage',
    singleTarget: false,
    powerRatio: 2,
    mana: 5,
    description: 'Damage the Boss and Heal the Player for (100%) of Player Power and restore 5 Mana to the Player',
    icon: 'ra-transfuse',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Renew': {
    id: 14,
    name: 'Renew',
    cast: 1,
    cost: 5,
    coolDown: 3,
    type: 'healing',
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 0.5,
    description: 'Place a Healing over Time effect on a friendly target, healing them for 60% of their Max Health over 15 seconds',
    icon: 'ra-sprout',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life',
    reserved: true
  },
  'Greater Renew': {
    id: 15,
    name: 'Greater Renew',
    cast: 5,
    cost: 15,
    coolDown: 15,
    type: 'healing',
    powerRatio: 0.5,
    singleTarget: false,
    description: 'Place a Healing over Time effect on each friendly party member, healing them for 60% of their Max Health over 15 seconds',
    icon: 'ra-sprout-disc',
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
    powerRatio: 1.5,
    tickPower: 1 / 12,
    ticks: 6,
    singleTarget: false,
    isChanneled: true,
    description: 'Damage ALL friendly characters for (50%) Player Power over 3 seconds, then heal ALL friendly characters for (150%) Player Power',
    icon: 'ra-wind-hole',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Tranquility': {
    id: 17,
    name: 'Tranquility',
    cast: 10,
    cost: 30,
    coolDown: 30,
    type: 'healing',
    powerRatio: 1,
    tickPower: 0.3,
    ticks: 10,
    singleTarget: false,
    isChanneled: true,
    description: 'Heal ALL friendly characters for 300% Player Power over 10 seconds. When the cast is finished, Heal All friendly characters for 100% Player Power and remove ALL effects from ALL friendly recruits',
    icon: 'ra-fairy',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Ring of Fire': {
    id: 18,
    name: 'Ring of Fire',
    cast: 3,
    cost: 5,
    coolDown: 10,
    type: 'damage',
    powerRatio: 2,
    tickPower: 1 / 6,
    ticks: 3,
    singleTarget: false,
    isChanneled: true,
    description: 'Damage ALL characters (including the Boss) for (50%) Player Power over 3 seconds, then Damage the Boss for (200%) Player Power',
    icon: 'ra-fire-ring',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Purge': {
    id: 19,
    name: 'Purge',
    cast: 1,
    cost: 5,
    coolDown: 5,
    type: 'support',
    powerRatio: 0,
    singleTarget: true,
    recruitOnly: true,
    percentage: 0.2,
    description: 'Remove ALL effects from a friendly Recruit, heal the target for (20%) of their Max Health for each effect removed. If you have no Life spells, heal twice as much.',
    icon: 'ra-cancel',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Restore': {
    id: 20,
    name: "Restore",
    cast: 3,
    cost: 10,
    coolDown: 7,
    type: 'healing',
    powerRatio: 1,
    tickPower: 0.5,
    ticks: 3,
    isChanneled: true,
    singleTarget: true,
    recruitOnly: true,
    description: "Heal a friendly Recruit for (150%) Player Power over 3 seconds, and then apply a Renew effect to the Target. (Renew restores 60% of the target's Max Health over 15 seconds)",
    icon: 'ra-crowned-heart',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Calibrate': {
    id: 21,
    name: 'Calibrate',
    cast: 1.5,
    cost: 5,
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
    coolDown: 15,
    type: 'support',
    powerRatio: 0,
    singleTarget: false,
    max: 5,
    percentage: 0.25,
    description: 'Steal up to 5 Mana from the Boss. If you have no Life Spells, Heal ALL Recruits for (25%) of their Max Health',
    icon: 'ra-snatch',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Cauterize': {
    id: 23,
    name: 'Cauterize',
    cast: 2,
    cost: 5,
    coolDown: 6,
    singleTarget: true,
    recruitOnly: true,
    isChanneled: true,
    ticks: 5,
    tickPower: 1,
    tickPercentage: 0.05,
    percentage: 0.5,
    greaterPercentage: 0.7,
    description: 'Damage a target Recruit for (25%) Max Health over 3 seconds, then heal the target for (50%) of Max Health. If you have no Life Spells, heal for %70 instead.',
    icon: 'ra-match-tip',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Alignment': {
    id: 24,
    name: 'Alignment',
    cast: 2,
    cost: 10,
    coolDown: 15,
    singleTarget: false,
    percentage: 30,
    greaterPercentage: 60,
    description: 'Set ALL Recruits to (30%) of their Max Health. If you have no Life Spells, set them to (60%) Health instead.',
    icon: 'ra-gear-heart',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Mass Cauterize': {
    id: 25,
    name: 'Mass Cauterize',
    cast: 2,
    cost: 15,
    coolDown: 15,
    singleTarget: false,
    isChanneled: true,
    tickPercentage: 0.025,
    ticks: 10,
    percentage: 0.5,
    greaterPercentage: 0.7,
    description: 'Damage ALL Recruits for (25%) of their Max Health over 3 seconds, then heal them for (50%) of Max Health. If you have no Life Spells, heal for (70%) instead.',
    icon: 'ra-heartburn',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Life Soul': {
    id: 26,
    name: 'Life Soul',
    cast: 2.5,
    cost: 10,
    coolDown: 30,
    singleTarget: false,
    percentage: 0.1,
    description: "Increase your Player Power by 10%. If you only have Life Spells, place a Renew Effect on ALL Recruits",
    icon: 'ra-aura',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life',
    reserved: true
  },
  'Arcane Soul': {
    id: 27,
    name: 'Arcane Soul',
    cast: 2.5,
    cost: 10,
    coolDown: 30,
    singleTarget: false,
    percentage: 0.1,
    greaterPercentage: 0.2,
    description: "Reduces the Mana Cost of your Spells by 1. If you only have Arcane Spells, reduce the Cast Time and Cooldown of your spells by 10%",
    icon: 'ra-aura',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane',
    reserved: true
  },
  'Fire Soul': {
    id: 28,
    name: 'Fire Soul',
    cast: 2.5,
    cost: 10,
    coolDown: 30,
    singleTarget: false,
    percentage: 0.1,
    greaterPercentage: 0.2,
    description: "Reduces the Cast Time and Cooldown of your spells by 10%. If you only have Fire Spells, increase your Player Power by 10%",
    icon: 'ra-aura',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire',
    reserved: true
  },
  'Shadow Soul': {
    id: 29,
    name: 'Shadow Soul',
    cast: 2.5,
    cost: 10,
    coolDown: 30,
    singleTarget: false,
    percentage: 0.1,
    greaterPercentage: 0.1,
    description: "Increase the Power of ALL Recruits by 10% at the cost of 10% Player Health. If you only have Shadow Spells, Heal the Player for 10% Health instead.",
    icon: 'ra-aura',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow',
    reserved: true
  },
  'Life Funnel': {
    id: 30,
    name: 'Life Funnel',
    cast: 2,
    cost: 5,
    coolDown: 1,
    singleTarget: true,
    recruitOnly: true,
    tickPercentage: 0.005,
    tickPower: 1,
    ticks: 6,
    isChanneled: true,
    description: "Transfer 3% of Max Player Health to the Target Recruit during the Cast, Healing the Target for Twice the amount of Health Lost",
    icon: 'ra-life-support',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow',
  },
  'Arcane Torrent': {
    id: 31,
    name: 'Arcane Torrent',
    cast: 10,
    cost: 20,
    coolDown: 30,
    singleTarget: false,
    tickPower: 0.2,
    ticks: 20,
    isChanneled: true,
    description: "Fire 20 bolts randomly during the cast. Each bolt will heal a Random Damaged Recruit or damage the Boss for (0.2%) Player Power. If you have no Life Spells, double the power of each bolt",
    icon: 'ra-radial-balance',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Blossom': {
    id: 32,
    name: 'Blossom',
    cast: 2,
    cost: 8,
    coolDown: 5,
    singleTarget: false,
    powerRatio: 0.5,
    description: "Heal ALL Friendly Characters for (50%) of Player Power",
    icon: 'ra-apple',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life',
  },
  'Chosen Champion': {
    id: 33,
    name: 'Chosen Champion',
    cast: 2,
    cost: 15,
    coolDown: 10,
    singleTarget: true,
    powerRatio: 1,
    altPowerRatio: 0.5,
    description: "Heal a Friendly Target for (50%) Player Power, and then Heal ALL Friendly Characters for (50%) Player Power. If you only have Single Target Spells, these Healing Effects cast Twice",
    icon: 'ra-muscle-fat',
    color: colors.lightOlive,
    background: colors.darkGreen,
    element: 'Life'
  },
  'Imbue': {
    id: 34,
    name: 'Imbue',
    cast: 2,
    cost: 10,
    coolDown: 10,
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 1,
    percentage: 0.3,
    greaterPercentage: 0.3,
    description: "Increase Target Recruit's Power and Speed by (5%). If you only have Single Target Spells, the Target is also healed for (30%) of their Max Health",
    icon: 'ra-heart-bottle',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Containment': {
    id: 35,
    name: 'Containment',
    cast: 5,
    cost: 15,
    coolDown: 30,
    singleTarget: false,
    powerRatio: 1,
    percentage: -0.2,
    greaterPercentage: 0.5,
    description: "Reduces the Health and Speed of ALL Recruits by (20%), but increases their Power by (50%). If all of your other spells aren't Single Target Spells, Kill a Random Recruit.",
    icon: 'ra-player-despair',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Sacrifice': {
    id: 36,
    name: 'Sacrifice',
    cast: 2,
    cost: 20,
    coolDown: 30,
    singleTarget: true,
    recruitOnly: true,
    percentage: 1,
    greaterPercentage: 0.5,
    description: "Kill a Target Recruit, and Heal ALL other Recruits to Full Health. Also Increases the Power of ALL Recruits and the Player by (100% divided by Party Size. i.e, 3 Recruits = (33%) Power to All). If the Target is Below (50%) Health, the Player loses (25%) Max Health",
    icon: 'ra-evil-book',
    color: colors.darkPurple,
    background: colors.faintPink,
    element: 'Shadow'
  },
  'Acclimate': {
    name: 'Acclimate',
    id: 37,
    cast: 5,
    cost: 10,
    coolDown: 20,
    singleTarget: false,
    percentage: 0.1,
    description: "Increase the Max and Current of ALL Recruits by (10%). If you have no Two Spells of the same element (ignoring this Spell), Increase the Power of your Recruits by (10%) too.",
    icon: 'ra-moon-sun',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Arcane Blast': {
    name: 'Arcane Blast',
    id: 38,
    cast: 1,
    cost: 5,
    coolDown: 5,
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 1.5,
    duration: 5,
    description: "Heal a Recruit for (150%) Player Power, the Recruit is then Stunned for 5 seconds (Recruits can't Attack while Stunned).",
    icon: 'ra-player-pain',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane'
  },
  'Arcane Explosion': {
    name: 'Arcane Explosion',
    id: 39,
    cast: 2,
    cost: 8,
    coolDown: 5,
    singleTarget: false,
    powerRatio: 1.5,
    duration: 3,
    description: "Heal ALL Recruits for (150%) Player Power, the Recruits are then Stunned for 3 seconds (Recruits can't Attack while Stunned).",
    icon: 'ra-bomb-explosion',
    color: colors.darkBlue,
    background: colors.lightBlue,
    element: 'Arcane',
    reserved: true
  },
  'Bomb Toss': {
    id: 40,
    name: 'Bomb Toss',
    cast: 2.5,
    cost: 5,
    coolDown: 7,
    singleTarget: false,
    powerRatio: 1.5,
    duration: 7,
    percentage: 0.2,
    description: 'Damage the Boss for (150%) Player Power, and place a Bomb Effect on a Random Recruit that will Explode after 7 seconds, Damaging All Recruits for (20%) of their Max Health. If All Recruits are Dead, Damage the Player for (10%) of Max Health instead',
    icon: 'ra-three-burning-balls',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Living Bomb': {
    id: 41,
    name: 'Living Bomb',
    cast: 1,
    cost: 7,
    coolDown: 10,
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 1.5,
    healPercentage: 0.4,
    duration: 7,
    percentage: 0.2,
    description: 'Heal the Target Recruit for (40%) of their Max Health and place a Bomb Effect on the Target Recruit that will Explode after 7 seconds, damaging ALL Recruits for (20%) of their Max Health',
    icon: 'ra-fire-bomb',
    color: colors.darkRed,
    background: colors.lightOrange,
    element: 'Fire'
  },
  'Defuse': {
    id: 42,
    name: 'Defuse',
    cast: 1,
    cost: 5,
    coolDown: 10,
    singleTarget: true,
    recruitOnly: true,
    powerRatio: 1,
    description: "If the Target Recruit has a Bomb Effect applied to them, the Bomb will now Heal All Recruits rather than Damage them when it expires. If there is no Bomb Effect on the Target, Apply a Renew Effect and a 3 second Stun effect to the Target instead.",
    icon: 'ra-vest',
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
