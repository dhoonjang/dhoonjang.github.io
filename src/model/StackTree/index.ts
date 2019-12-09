import { ComputerScience, Web } from "./oneLayer";
import { StackNode } from "../../type/modelType";

const StackTree: StackNode = {
  title: "Stack Tree Root",
  description: "스택 트리 시작점",
  children: [
    { stack: ComputerScience, weight: 1 },
    { stack: Web, weight: 4 }
  ]
};

export default StackTree;
