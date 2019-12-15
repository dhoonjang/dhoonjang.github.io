import { getArrayAverage } from "./arrFunc";
import { StackNode } from "../type/modelType";

export const getStackPoint = (stackNode: StackNode) => {
  if (stackNode.point) return stackNode.point;

  const weightArray: Array<number> = stackNode.children.map(
    child => child.weight
  );

  const pointArray: Array<number> = stackNode.children.map(
    child => getStackPoint(child.stack) * child.weight
  );

  return Math.round(getArrayAverage(pointArray) / getArrayAverage(weightArray));
};
