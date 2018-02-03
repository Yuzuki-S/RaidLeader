export default {
  name: 'Lunging Locusts',
  level: 2,
  initHp: 2000,
  hp: 2000,
  initPower: 30,
  power: 30,
  initArmor: 0,
  armor: 0,
  mana: 0,
  maxMana: 100,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "As you explore deeper into the Swamp, you see less life around you, and a soft buzzing sound starts getting louder... and louder...",
  weaponRewards: ['Plagued Aegis', 'Plagued Daggers', 'Plagued Wand', 'Plagued Sword', 'Plagued Stave', 'Plagued Scythe', 'Glowing Libram', 'Plagued Staff of the Swamp'],
  goldReward: 500,
  weaponChance: 1,
  progress_required: 1,
  spells: [
    {
      name: 'Overwhelm',
      cast: 20,
      cost: 100,
      coolDown: 0,
      type: 'damage',
      singleTarget: false,
      powerRatio: 100,
      onCooldown: false,
      description: 'Damage ALL enemy characters for 10000% BOSS POWER',
    },
    {
      name: 'Regenerate',
      cast: 5,
      cost: 0,
      coolDown: 5,
      type: 'armor',
      singleTarget: false,
      powerRatio: 1,
      armor: 0,
      health: 100,
      onCooldown: false,
      description: 'Gain 100 Health'
    },
    {
      name: 'Lunge',
      cost: 0,
      cast: 4,
      coolDown: 4,
      powerRatio: 1,
      type: 'damage',
      singleTarget: true,
      onCooldown: false,
      description: "Damage a random non-poisoned enemy recruit for (%100) Boss Power, Poison that recruit for 100% Boss Power as Damage every 5 seconds for 15 seconds"
    }
  ]
}
