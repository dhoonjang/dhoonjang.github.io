import { StackNode } from "../../type/modelType";
import {
  ReactLibrary,
  RenderingOptimize,
  RestAPI,
  GraphQL,
  WebSocket,
  DataBaseDesign,
  APIDevelop
} from "./layer3";

//Computer Science
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

//Web Develop
export const FrontEnd: StackNode = {
  title: "Front End",
  description: "",
  children: [
    { stack: ReactLibrary, weight: 5 },
    { stack: RenderingOptimize, weight: 3 }
  ]
};

export const BackEnd: StackNode = {
  title: "Back End",
  description: "",
  children: [
    { stack: DataBaseDesign, weight: 5 },
    { stack: APIDevelop, weight: 3 }
  ]
};

export const Communication: StackNode = {
  title: "Communication",
  description: "프론트와 백엔드의 통신 방법",
  children: [
    { stack: RestAPI, weight: 10 },
    { stack: GraphQL, weight: 6 },
    { stack: WebSocket, weight: 5 }
  ]
};

//Design Pattern
