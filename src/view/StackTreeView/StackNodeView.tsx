import React, { useMemo } from "react";
import { getStackPoint } from "../../func/modelFunc";
import { StackNodeProps } from "../../type/viewType";
import {
  StackBody,
  StackChildren,
  StackDescription
} from "../../style/StackTreeStyle";

const StackNodeView: React.FC<StackNodeProps> = ({
  stack,
  level,
  parentWeight,
  calWeight,
  navDown,
  clickFunc
}) => {
  const stackPoint = useMemo(() => getStackPoint(stack), [stack]);

  const makeChildren = useMemo(() => {
    const weightSum: number = stack.children.reduce(
      (sum, current) => sum + current.weight,
      0
    );
    return stack.children.map((child, index) => {
      let clickFunc;
      if (navDown && level === 1) clickFunc = () => navDown(index);
      return (
        <StackNodeView
          stack={child.stack}
          level={level + 1}
          calWeight={child.weight / weightSum}
          parentWeight={calWeight}
          key={child.stack.title}
          clickFunc={clickFunc}
        />
      );
    });
  }, [stack, calWeight, level, navDown]);

  return (
    <div className="StackNode" onClick={clickFunc}>
      {stack.title !== "root" && (
        <StackBody size={calWeight * parentWeight} point={stackPoint}>
          {stack.title}
          {level === 1 && (
            <StackDescription>{stack.description}</StackDescription>
          )}
        </StackBody>
      )}
      <StackChildren childrenNumber={stack.children.length}>
        {makeChildren}
      </StackChildren>
    </div>
  );
};

export default StackNodeView;
