import React from "react";
import stackTree from "./data/StackTree/index";
import { getPoint } from "./func/dataFunc";

const App: React.FC = () => {
  const myPoint = getPoint(stackTree);

  return (
    <div className="App">
      메인 페이지
      <div>내 점수: {myPoint}</div>
    </div>
  );
};

export default App;
