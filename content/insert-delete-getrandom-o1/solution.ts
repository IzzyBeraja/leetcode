export class RandomizedSet {
  count: number;
  values: { [key: number]: number };

  constructor() {
    this.count = 0;
    this.values = {};
  }

  insert(val: number): boolean {
    if (this.values[val] != null) return false;

    this.values[val] = val;
    this.count++;
    return true;
  }

  remove(val: number): boolean {
    if (this.values[val] == null) return false;

    delete this.values[val];
    this.count--;
    return true;
  }

  getRandom(): number {
    const rand = Math.floor(Math.random() * this.count);

    return Object.values(this.values)[rand];
  }
}
