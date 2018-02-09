export default {
  name: 'Trampling Turtle',
  level: 1,
  initHp: 150,
  hp: 150,
  initPower: 30,
  power: 25,
  initArmor: 250,
  armor: 250,
  mana: 0,
  maxMana: 20,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "This Turtle has a strong shell. Really strong. Like, REALLY strong",
  goldReward: 300,
  weaponRewards: ['Ancient Pearls', 'Massive Shell'],
  weaponChance: 1,
  progress_required: 0,
  icon: 'ra-spiral-shell'
  spells: [
    {
      name: 'Protect',
      cast: 3,
      cost: 5,
      coolDown: 10,
      type: 'armor',
      singleTarget: false,
      powerRatio: 50,
      onCooldown: false,
      description: "Gain 50 ARMOR",
      icon: 'ra-eye-shield'
    },
    {
      name: 'Swipe',
      cast: 3,
      cost: 0,
      coolDown: 3,
      type: 'damage',
      singleTarget: false,
      powerRatio: 1,
      onCooldown: false,
      description: "Damage ALL enemy characters for 100% BOSS POWER",
      icon: 'ra-bird-claw'
    },
    {
      name: 'Trample',
      cast: 5,
      cost: 5,
      coolDown: 5,
      type: 'damage',
      singleTarget: true,
      powerRatio: 2,
      onCooldown: false,
      description: "Damage the enemy TARGET and the PLAYER for 200% BOSS POWER",
      icon: 'ra-player-pain'
    }
  ]
}
