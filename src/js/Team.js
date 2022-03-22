export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('character is already exist');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let current = 0;
    const iteratorsValues = [...this.members.values()];

    return {
      next() {
        if (current < iteratorsValues.length) {
          return {
            done: false,
            value: iteratorsValues[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
