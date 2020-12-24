class Hash<K extends string | number, V> {
  public size: number;
  private data: { [k in K]: V };

  constructor(entries = [] as Array<[K, V]>) {
    this.size = 0;
    this.data = Object.create(null);

    let index = 0;
    const { length } = entries;

    while (index++ < length) {
      const entry = entries[index];
      this.set(...entry);
    }
  }

  clear() {
    this.size = 0;
    this.data = Object.create(null);
  }

  delete(key: K) {
    const result = this.has(key) && delete this.data[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  get(key: K) {
    return this.data[key];
  }

  set(key: K, value: V) {
    this.size += this.has(key) ? 0 : 1;
    this.data[key] = value;
    return this;
  }

  has(key: K) {
    return this.data[key] !== undefined;
  }
}

export default Hash;
