import {
  DataBase,
  ComputerNetwork,
  FrontEnd,
  BackEnd,
  OperatingSystem
} from "./twoLayer";
import { StackNode } from "../../type/modelType";

export const ComputerScience: StackNode = {
  title: "Coumputer Science",
  description: "컴퓨터 전반의 일반적인 지식들",
  children: [
    { stack: DataBase, weight: 9 },
    { stack: ComputerNetwork, weight: 8 },
    { stack: OperatingSystem, weight: 10 }
  ]
};

export const Web: StackNode = {
  title: "Web Develop",
  description: "웹 시스템을 사용하는 애플리케이션 개발",
  children: [
    { stack: FrontEnd, weight: 4 },
    { stack: BackEnd, weight: 1 }
  ]
};
