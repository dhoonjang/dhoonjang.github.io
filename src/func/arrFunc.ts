export const getArrayAverage = (arr: Array<number>) => {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
};

export class ImStack<T> {
  private data: Array<T> = [];

  constructor(dataInput: Array<T>) {
    this.data = dataInput;
  }

  push(item: T): ImStack<T> {
    this.data.push(item);
    return new ImStack<T>(this.data);
  }

  pop(): ImStack<T> {
    this.data.pop();
    return new ImStack<T>(this.data);
  }

  top(): T {
    return this.data[this.data.length - 1];
  }
}
