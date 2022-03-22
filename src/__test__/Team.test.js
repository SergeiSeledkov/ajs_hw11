import Team from '../js/Team';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('add new character in team', () => {
  const character1 = new Daemon('dfhgdhg1', 'Daemon');
  const team = new Team();
  team.add(character1);
  expect(team.members.has(character1)).toBe(true);
});

test('Error character is already exist', () => {
  const character2 = new Magician('dfhgdhg2', 'Magician');
  const team = new Team();
  team.add(character2);
  expect(() => {
    team.add(character2);
  }).toThrow('character is already exist');
});

test('Add few character', () => {
  const character3 = new Bowman('dfhgdhg3', 'Bowman');
  const character4 = new Swordsman('dfhgdhg4', 'Swordsman');

  const team = new Team();
  team.addAll(character3, character4);
  expect(team.members.size).toBe(2);
});

test('check addAll function', () => {
  const character5 = new Bowman('dfhgdhg5', 'Bowman');
  const character6 = new Swordsman('dfhgdhg6', 'Swordsman');

  const team = new Team();
  team.addAll(character5, character6);
  expect(() => {
    team.addAll(character5, character6);
  });
  expect(team.members.size).toBe(2);
});

test('check toArray function', () => {
  const character7 = new Undead('dfhgdhg7', 'Undead');
  const character8 = new Zombie('dfhgdhg8', 'Zombie');

  const team = new Team();
  team.addAll(character7, character8);
  const received = team.toArray();
  const result = [
    {
      name: 'dfhgdhg7',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'dfhgdhg8',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(received).toEqual(result);
});
