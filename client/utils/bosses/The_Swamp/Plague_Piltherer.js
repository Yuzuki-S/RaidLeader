export default {
  name: 'Plague Piltherer',
  level: 2,
  initHp: 1000,
  hp: 1000,
  initPower: 0,
  power: 0,
  initArmor: 1000,
  armor: 1000,
  mana: 10,
  maxMana: 10,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "A crazed man darts around the Swamp lands, scavenging the many corpses for their precious loot. You even see him drinking some of that disgusting slime!",
  weaponRewards: ['Plagued Aegis', 'Plagued Daggers', 'Plagued Wand', 'Plagued Blade', 'Plagued Stave', 'Plagued Scythe', 'Glowing Libram', 'Plagued Staff of the Swamp'],
  goldReward: 500,
  weaponChance: 1,
  progress_required: 2,
  spells: [
    {
      name: 'Ingest Plague',
      cast: 10,
      cost: 10,
      coolDown: 10,
      type: 'damage',
      singleTarget: false,
      powerRatio: 0,
      power: 30,
      onCooldown: false,
      description: 'Gain 30 Power. (Only usable when at 0 Power)',
      icon: 'ra-potion'
    },
    {
      name: 'Spread Plague',
      cost: 0,
      cast: 5,
      coolDown: 15,
      powerRatio: 1,
      type: 'damage',
      singleTarget: false,
      onCooldown: false,
      description: "Poison All enemy recruits, dealing 60% of their Max Health over 15 seconds",
      icon: 'ra-biohazard'
    },
    {
      name: 'Regenerate',
      cast: 3,
      cost: 3,
      coolDown: 10,
      type: 'armor',
      singleTarget: false,
      powerRatio: 1,
      armor: 100,
      health: 100,
      onCooldown: false,
      description: 'Gain 100 ARMOR and 100 Health',
      icon: 'ra-regeneration'
    },
    {
      name: 'Ravage',
      cost: 0,
      cast: 5,
      coolDown: 1,
      powerRatio: 1,
      type: 'damage',
      singleTarget: false,
      onCooldown: false,
      power: -10,
      description: "Damage all enemy characters for 100% Boss Power, lose 10 Power if enemy party is still alive",
      icon: 'ra-slash-ring'
    }
  ]
}
