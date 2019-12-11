import { StackNode } from "./modelType";

export type StackNodeProps = {
  stack: StackNode;
  level: number;
  navDown?: (index: number) => void;
  clickFunc?: () => void;
};
