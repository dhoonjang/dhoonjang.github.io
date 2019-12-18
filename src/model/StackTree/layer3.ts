import { StackNode } from "../../type/modelType";
import { ReactHooks, PropsStateManage, ComponentLifeCycle } from "./layer4";

//FrontEnd
export const ReactLibrary: StackNode = {
  title: "React",
  description: "웹 뷰 중심의 프론트엔드 라이브러리",
  children: [
    { stack: ReactHooks, weight: 3 },
    { stack: PropsStateManage, weight: 5 },
    { stack: ComponentLifeCycle, weight: 4 }
  ]
};

export const RenderingOptimize: StackNode = {
  title: "Rendering Optimize",
  description: "렌더링 최적화",
  point: 10,
  children: []
};

//BeackEnd
export const DataBaseDesign: StackNode = {
  title: "Data Base Design",
  description: "데이터베이스 설계 및 구축",
  point: 10,
  children: []
};

export const APIDevelop: StackNode = {
  title: "API Develop",
  description: "API 개발",
  point: 15,
  children: []
};

//Communication
export const RestAPI: StackNode = {
  title: "Rest API",
  description: "HTTP 메소드를 이용한 RESTful 통신 규약",
  point: 30,
  children: []
};

export const GraphQL: StackNode = {
  title: "GraphQL",
  description: "HTTP body에 질의어를 담는 통신 규약",
  point: 15,
  children: []
};

export const WebSocket: StackNode = {
  title: "Web Socket",
  description: "서버와 클라이언트가 연결되어 실시간으로 통신하는 방법",
  point: 10,
  children: []
};
