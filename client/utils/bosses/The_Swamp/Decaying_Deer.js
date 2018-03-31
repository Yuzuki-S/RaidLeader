export default {
  name: 'Decaying Deer',
  level: 2,
  initHp: 2000,
  hp: 2000,
  initPower: 60,
  power: 60,
  initArmor: 500,
  armor: 500,
  mana: 2,
  maxMana: 5,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "You find the corpse of a deer. So sad... and then it starts moving...",
  weaponRewards: ['Plagued Daggers', 'Plagued Arrows', 'The Antidote'],
  goldReward: 500,
  weaponChance: 1,
  progress_required: 0,
  icon: ' ra-desert-skull',
  spells: [
    {
      name: 'Decay',
      cast: 5,
      cost: 0,
      coolDown: 15,
      singleTarget: false,
      onCooldown: false,
      health: -50,
      powerRatio: 1,
      percentage: 0.2,
      description: "Damage ALL Recruits for (20%) of their Max Health and Poison them for 60% of their Max Health over 15 seconds, lose Health equal to 100% Boss Power",
      icon: 'ra-desert-skull'
    },
    {
      name: 'Bite',
      cast: 5,
      cost: 2,
      coolDown: 10,
      powerRatio: 1,
      type: 'damage',
      singleTarget: true,
      onCooldown: false,
      description: "Damage the Boss' TARGET for 100% of BOSS POWER",
      icon: 'ra-alligator-clip'
    },
    {
      name: 'Feed',
      cast: 5,
      cost: 2,
      coolDown: 10,
      type: 'damage',
      singleTarget: false,
      powerRatio: 10,
      onCooldown: false,
      description: 'Gain 10 Power',
      icon: 'ra-knife-fork'
    },
    {
      name: 'Regenerate',
      cast: 5,
      cost: 3,
      coolDown: 10,
      type: 'armor',
      singleTarget: false,
      powerRatio: 1,
      armor: 100,
      health: 100,
      onCooldown: false,
      description: 'Gain 100 Armor and 100 Health.',
      icon: 'ra-regeneration'
    }
  ]
}
