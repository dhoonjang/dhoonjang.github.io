import React, { useState } from "react";
import StackTree from "../../model/StackTree/index";
import StackNodeView from "./StackNodeView";
import { StackNode } from "../../type/modelType";
import { ImStack } from "../../func/arrFunc";
import upicon from "../../img/upicon.png";
import { StackTreeUpIcon } from "../../style/StackTreeStyle";

const StackTreeView: React.FC = () => {
  const [stack, setStack] = useState<StackNode>(StackTree);
  const [path, setPath] = useState<ImStack<StackNode>>(
    new ImStack<StackNode>([])
  );

  const navUp = () => {
    const parent = path.top();

    if (parent) {
      const newPath = path.pop();
      setPath(newPath);
      setStack(parent);
    }
  };

  const navDown = (index: number) => {
    const child = stack.children[index];

    if (child) {
      const newPath = path.push(stack);
      setPath(newPath);
      setStack(child.stack);
    }
  };

  return (
    <div className="StackTree">
      <StackTreeUpIcon src={upicon} onClick={navUp} />
      <StackNodeView
        stack={stack}
        level={1}
        parentWeight={1}
        calWeight={1}
        navDown={navDown}
      />
    </div>
  );
};

export default StackTreeView;
