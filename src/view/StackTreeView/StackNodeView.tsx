import React, { useMemo } from "react";
import { getPoint } from "../../func/modelFunc";
import { StackNode } from "../../type/modelType";

type StackNodeProps = {
  stack: StackNode;
};

const StackNodeView: React.FC<StackNodeProps> = ({ stack }) => {
  const stackPoint = useMemo(() => getPoint(stack), [stack]);

  return (
    <div className="StackTree">
      <h1>Stack Tree</h1>
      <h2>{stack.title}</h2>
      <div>스택 점수: {stackPoint}</div>
    </div>
  );
};

export default StackNodeView;
