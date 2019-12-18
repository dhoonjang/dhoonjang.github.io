import { ComputerScience, Web, DesignPattern } from "./layer1";
import { StackNode } from "../../type/modelType";

const StackTree: StackNode = {
  title: "root",
  description: "",
  children: [
    { stack: ComputerScience, weight: 4 },
    { stack: Web, weight: 10 },
    { stack: DesignPattern, weight: 3 }
  ]
};

export default StackTree;
