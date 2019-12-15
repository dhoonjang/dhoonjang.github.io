export const getArrayAverage = (arr: Array<number>): number => {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
};

export class ImStack<T> {
  private data: Array<T> = [];

  constructor(dataInput: Array<T>) {
    this.data = dataInput;
  }

  push(item: T): ImStack<T> {
    let st = new ImStack<T>(this.data);
    st.data.push(item);
    return st;
  }

  pop(): ImStack<T> {
    let st = new ImStack<T>(this.data);
    st.data.pop();
    return st;
  }

  top(): T {
    return this.data[this.data.length - 1];
  }
}
