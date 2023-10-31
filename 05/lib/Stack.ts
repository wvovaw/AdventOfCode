export default class Stack<T> {
  private _buffer: T[];

  constructor();
  constructor(array: T[]);
  constructor(stack: Stack<T>);
  constructor(value: T[] | Stack<T> | void) {
    if (value instanceof Array) this._buffer = Array.from(value);
    else if (value instanceof Stack) this._buffer = Array.from(value._buffer);
    else this._buffer = [];
  }

  get length(): number {
    return this._buffer.length;
  }

  public push(value: T): void;
  public push(values: T[]): void;
  public push(value: T | T[]): void {
    if (value instanceof Array) {
      value.forEach((item) => this._buffer.push(item));
    } else this._buffer.push(value);
  }

  public pop(): T | undefined {
    return this._buffer.pop();
  }
  public peek(): T | undefined {
    return this._buffer.at(-1);
  }
}
