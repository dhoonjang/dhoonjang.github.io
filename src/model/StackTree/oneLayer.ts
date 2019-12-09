import { DataBase, ComputerNetwork, FrontEnd, BackEnd } from "./twoLayer";
import { StackNode } from "../../type/modelType";

export const ComputerScience: StackNode = {
  title: "Coumputer Science",
  description: "",
  children: [
    { stack: DataBase, weight: 2 },
    { stack: ComputerNetwork, weight: 1 }
  ]
};

export const Web: StackNode = {
  title: "Web Develop",
  description: "",
  children: [
    { stack: FrontEnd, weight: 4 },
    { stack: BackEnd, weight: 1 }
  ]
};
