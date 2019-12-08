import { getArrayAverage } from "./arrFunc";
import { StackNode } from "../type/dataType";

export const getPoint = (stack: StackNode) => {
  if (stack.point) return stack.point;

  const weightArray: Array<number> = stack.children.map(child => child.weight);

  const pointArray: Array<number> = stack.children.map(
    child => getPoint(child.stack) * child.weight
  );

  return Math.round(getArrayAverage(pointArray) / getArrayAverage(weightArray));
};
