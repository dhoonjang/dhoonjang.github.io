import { StackNode } from "./modelType";

export type StackNodeProps = {
  stack: StackNode;
  level: number;
  calWeight: number;
  parentWeight: number;
  navDown?: (index: number) => void;
  clickFunc?: () => void;
};
