module.exports = {
  ['Dragon Scale']: (level, id) => ({
    name: 'Dragon Scale',
    type: 'Weapon',
    level,
    id,
    hp: 3 * level,
    power: level,
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
    hp: 2 * level,
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
    power: -1 * level,
    speed: -1,
    class: 'Warrior',
    description: 'A shell so heavy only a Warrior can weild it, not good for hitting things with, but great for not dying!',
    bonusEffect: null
  }),
  ['Ancient Pearls']: (level, id) => ({
    name: 'Ancient Pearls',
    type: 'Weapon',
    level,
    id,
    hp: -1 * level,
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
}