import React, { useMemo } from "react";
import { getPoint } from "../../func/modelFunc";
import { StackNodeProps } from "../../type/viewType";

const StackNodeView: React.FC<StackNodeProps> = ({
  stack,
  level,
  navDown,
  clickFunc
}) => {
  const stackPoint = useMemo(() => getPoint(stack), [stack]);

  const makeChildren = useMemo(
    () =>
      stack.children.map((child, index) => {
        let clickFunc;
        if (navDown && level === 1) clickFunc = () => navDown(index);
        return (
          <StackNodeView
            stack={child.stack}
            level={level + 1}
            key={child.stack.title}
            clickFunc={clickFunc}
          />
        );
      }),
    [stack, level, navDown]
  );

  return (
    <div className="StackNode" onClick={clickFunc}>
      <div className="Node">
        <h2>{stack.title}</h2>
        스택 점수: {stackPoint}
      </div>
      <div className="Children">{makeChildren}</div>
    </div>
  );
};

export default StackNodeView;
