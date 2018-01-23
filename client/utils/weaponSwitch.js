module.exports = {
  ['Training Staff']: (level, id) => ({
    name: 'Training Staff',
    type: 'Weapon',
    level,
    id,
    hp: (level + 1) * 50,
    power: 2 * level,
    mana: 50 + (50 * level),
    manaRegen: 1,
    class: 'Player',
    description: 'It comes with a note attached; "Hitting your Recruits with this will NOT heal them!"',
    bonusEffect: null
  }),
  ['Cursed Staff of the Wilds']: (level, id) => ({
    name: 'Cursed Staff of the Wilds',
    type: 'Weapon',
    level,
    id,
    hp: ((level * 2) + 1) * 35,
    power: 3 * level,
    mana: 120,
    manaRegen: 1,
    class: 'Player',
    description: 'This Staff is covered in thorns. You hear the sounds of a Bear Wailing from inside of it.',
    bonusEffect: null
  }),
  ['Cleansed Staff of the Wilds']: (level, id) => ({
    name: 'Cleansed Staff of the Wilds',
    type: 'Weapon',
    level,
    id,
    hp: ((level * 2) + 1) * 50,
    power: 3 * level,
    mana: 50,
    manaRegen: 2,
    class: 'Player',
    description: 'You have lifted the curse upon the Wilds, and the Wilds presents you this as a reward.',
    bonusEffect: null
  }),
  ['Dragon Scale']: (level, id) => ({
    name: 'Dragon Scale',
    type: 'Weapon',
    level,
    id,
    hp: 3 * level,
    power: 2 * level,
    speed: -1,
    class: 'Paladin',
    description: 'A Scale from a Dragon, this should make a good shield',
    bonusEffect: null
  }),
  ['Bear Fangs']: (level, id) => ({
    name: 'Bear Fangs',
    type: 'Weapon',
    level,
    id,
    hp: -1 * level,
    power: 0,
    speed: 1,
    class: 'Rogue',
    description: 'A set of Bear Fangs. Good for stabbing, not very good for blocking',
    bonusEffect: null
  }),
  ['Bear Heart']: (level, id) => ({
    name: 'Bear Heart',
    type: 'Weapon',
    level,
    id,
    hp: 5 * level,
    power: level,
    speed: 0,
    class: 'Warlock',
    description: 'The heart still beats, only a true sadist would find this useful',
    bonusEffect: null
  }),
  ['Turtle Shell']: (level, id) => ({
    name: 'Turtle Shell',
    type: 'Weapon',
    level,
    id,
    hp: 5 * level,
    power: 0,
    speed: 0,
    class: 'Warrior',
    description: 'A shell so heavy only a Warrior can weild it, not good for hitting things with, but great for not dying!',
    bonusEffect: null
  }),
  ['Ancient Pearls']: (level, id) => ({
    name: 'Ancient Pearls',
    type: 'Weapon',
    level,
    id,
    hp: -5 * level,
    power: level,
    speed: 1,
    class: 'Monk',
    description: "Strange, the Turtle was growing Pearls under it's shell",
    bonusEffect: null
  }),
  ['Fine Silk']: (level, id) => ({
    name: 'Fine Silk',
    type: 'Weapon',
    level,
    id,
    hp: -1 * level,
    power: level,
    speed: 1,
    class: 'Priest',
    description: "The Spider had spun some amazing silk. Very light, with",
    bonusEffect: null
  }),
  ['Spider Eye Wand']: (level, id) => ({
    name: 'Spider Eye Wand',
    type: 'Weapon',
    level,
    id,
    hp: -1 * level,
    power: 1 * level,
    speed: 1,
    class: 'Mage',
    description: "It's a stick with a Spider Eye on the end, so obviously it's magical",
    bonusEffect: null
  }),
  ['Plagued Aegis']: (level, id) => ({
    name: 'Plagued Aegis',
    type: 'Weapon',
    level,
    id,
    hp: 3 * level,
    power: 2 * level,
    speed: 1,
    class: 'Paladin',
    description: 'A lost shield from a fallen adventurer. "A Blaine" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Plagued Blade']: (level, id) => ({
    name: 'Plagued Blade',
    type: 'Weapon',
    level,
    id,
    hp: -2 * level,
    power: 2 * level,
    speed: 1,
    class: 'Warrior',
    description: 'A lost weapon from a fallen adventurer. "A Blaine" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Plagued Daggers']: (level, id) => ({
    name: 'Plagued Daggers',
    type: 'Weapon',
    level,
    id,
    hp: 0,
    power: -1,
    speed: 2,
    class: 'Rogue',
    description: 'A lost pair of Daggers from a fallen adventurer. "Joe Van Boe" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Plagued Scythe']: (level, id) => ({
    name: 'Plagued Scythe',
    type: 'Weapon',
    level,
    id,
    hp: 3 * level,
    power: 0,
    speed: 1,
    class: 'Warlock',
    description: 'A lost weapon from a fallen adventurer. "A A. Ron" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Plagued Stave']: (level, id) => ({
    name: 'Plagued Stave',
    type: 'Weapon',
    level,
    id,
    hp: -1 * level,
    power: -1 * level,
    speed: 2,
    class: 'Monk',
    description: 'A lost weapon from a fallen adventurer. "Dr. Dayne" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Plagued Wand']: (level, id) => ({
    name: 'Plagued Wand',
    type: 'Weapon',
    level,
    id,
    hp: 3 * level,
    power: -1 * level,
    speed: 1,
    class: 'Mage',
    description: 'A lost weapon from a fallen adventurer. "Jazz Man" is engraved on the back',
    bonusEffect: 'selfPoison',
    effectDescription: `The character's attacks have a chance to Poison themselves for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Glowing Libram']: (level, id) => ({
    name: 'Plagued Libram',
    type: 'Weapon',
    level,
    id,
    hp: -2 * level,
    power: 0,
    speed: 3,
    class: 'Priest',
    description: 'A lost weapon from a fallen adventurer. "L. N." is engraved on the back',
    bonusEffect: 'curePoison',
    effectDescription: `The Priest's heals cure any Poison effect on the spell's Target`
  }),
  ['Plagued Staff of the Swamp']: (level, id) => ({
    name: 'Plagued Staff of the Swamp',
    type: 'Weapon',
    level,
    id,
    hp: (level) * 50,
    power: 3 * level,
    mana: (100 * level),
    manaRegen: 0,
    class: 'Player',
    description: 'The staff resonates great power, but something about it feels so wrong.',
    bonusEffect: 'Poison',
    effectDescription: `Your targeted heals Poison the target for ${level} damage every 5 seconds for 15 seconds`
  }),
  ['Cleansed Staff of the Woods']: (level, id) => ({
    name: 'Cleansed Staff of the Woods',
    type: 'Weapon',
    level,
    id,
    hp: (level + 1) * 50,
    power: 2 * level,
    mana: 20 + (30 * level),
    manaRegen: 2,
    class: 'Player',
    description: 'Made from a powerful Oak Tree. A small artifact of purity from the Woods that used to be...',
    bonusEffect: 'curePoison',
    effectDescription: "Your targeted heals remove any Poison effect from the target"
  })
}
