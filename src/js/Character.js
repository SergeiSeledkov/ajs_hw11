const typeArr = ['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 11 && typeArr.includes(type.toLowerCase())) {
      this.name = name;
      this.type = type;
    } else {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов. Тип персонажа должен быть один из доступных - Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);

      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
