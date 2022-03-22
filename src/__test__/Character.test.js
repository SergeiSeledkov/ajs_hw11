import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('check create character bowman', () => {
  const recieved = new Bowman('player1', 'Bowman');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('check create character Daemon', () => {
  const recieved = new Daemon('player1', 'Daemon');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('check create character Magician', () => {
  const recieved = new Magician('player1', 'Magician');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('check create character Swordsman', () => {
  const recieved = new Swordsman('player1', 'Swordsman');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('check create character Undead', () => {
  const recieved = new Undead('player1', 'Undead');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('check create character Zombie', () => {
  const recieved = new Zombie('player1', 'Zombie');
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('check wrong type create character', () => {
  expect(() => {
    const result = new Character('player1', 'wrongType');
    return result;
  }).toThrow();
});

test('check 1 symbol for name', () => {
  expect(() => {
    const result = new Character('p', 'Bowman');
    return result;
  }).toThrow();
});

test('check 11 symbol`s for name', () => {
  expect(() => {
    const result = new Character('player1play', 'Bowman');
    return result;
  }).toThrow();
});

test('check levelUp if health > 0', () => {
  const recieved = new Undead('player1', 'Undead');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'player1',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('check levelUp if health = 0', () => {
  const recieved = new Zombie('player1', 'Undead');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow();
});

test('check damage if health > 0', () => {
  const recieved = new Undead('player1', 'Undead');
  recieved.damage(10);
  const result = {
    name: 'player1',
    type: 'Undead',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toEqual(result);
});

test('check damage if health < 0', () => {
  const recieved = new Daemon('player1', 'Zombie');
  recieved.damage(9999);

  expect(recieved.health).toEqual(0);
});
