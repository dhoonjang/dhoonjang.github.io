import React, { useState } from "react";
import StackTree from "../../model/StackTree/index";
import StackNodeView from "./StackNodeView";
import { StackNode } from "../../type/modelType";

const StackTreeView: React.FC = () => {
  const [stack, setStack] = useState<StackNode>(StackTree);
  const [path, setPath] = useState<Array<StackNode>>([]);

  const navUp = () => {
    const parent = path[path.length - 1];

    if (parent) {
      const newPath = path.filter(p => p !== parent);
      setPath(newPath);
      setStack(parent);
    }
  };

  const navDown = (index: number) => {
    const child = stack.children[index];

    if (child) {
      const newPath = path.concat(stack);
      setPath(newPath);
      setStack(child.stack);
    }
  };

  return (
    <div className="StackTree">
      <StackNodeView stack={stack} />
      <button onClick={navUp}>navUp</button>
      <button onClick={() => navDown(1)}>navDown</button>
    </div>
  );
};

export default StackTreeView;
