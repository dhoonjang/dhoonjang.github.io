import { ComputerScience, Web } from "./oneLayer";
import { StackNode } from "../../type/modelType";

const StackTree: StackNode = {
  title: "root",
  description: "",
  children: [
    { stack: ComputerScience, weight: 1 },
    { stack: Web, weight: 3 }
  ]
};

export default StackTree;
