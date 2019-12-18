import { StackNode } from "../../type/modelType";
import { ReactLibrary, RestAPI } from "./layer3";

export const DataBase: StackNode = {
  title: "Data Base",
  description: "",
  point: 10,
  children: []
};

export const ComputerNetwork: StackNode = {
  title: "Computer Network",
  description: "",
  point: 11,
  children: []
};

export const OperatingSystem: StackNode = {
  title: "Operating System",
  description: "운영체제(OS)에 대한 이해와 관련 지식들",
  point: 10,
  children: []
};

export const FrontEnd: StackNode = {
  title: "Front End",
  description: "",
  children: [
    { stack: ReactLibrary, weight: 5 },
    { stack: RestAPI, weight: 2 }
  ]
};

export const BackEnd: StackNode = {
  title: "Back End",
  description: "",
  point: 10,
  children: []
};
