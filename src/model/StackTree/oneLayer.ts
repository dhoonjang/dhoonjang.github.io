import { DataBase, ComputerNetwork } from "./twoLayer";
import { StackNode } from "../../type/modelType";

export const ComputerScience: StackNode = {
  title: "Coumputer Science",
  description: "",
  children: [
    { stack: DataBase, weight: 2 },
    { stack: ComputerNetwork, weight: 1 }
  ]
};
