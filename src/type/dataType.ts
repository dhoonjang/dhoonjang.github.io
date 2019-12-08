type StackChildren = {
  stack: StackNode;
  weight: number;
};

export type StackNode = {
  title: string;
  description: string;
  point?: number;
  children: Array<StackChildren>;
};
