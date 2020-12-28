import * as React from "react";
import cn from "classnames";
import BackGradation from "../canvas/BackGradation";
import { Helmet } from "react-helmet";
// markup
const IndexPage: React.FC = () => {
  const [dive, setDive] = React.useState<boolean>(false);
  const [diveComplete, setDiveComplete] = React.useState<boolean>(false);
  const canvasRef = React.useRef<HTMLDivElement>(null);

  const start = () => setDive(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (dive) setDiveComplete(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [dive]);

  React.useEffect(() => {
    if (diveComplete && canvasRef.current) {
      new BackGradation(canvasRef);
    }
  }, [diveComplete]);

  return (
    <div
      className={cn("IndexPage", {
        dive,
      })}
    >
      <Helmet>
        <title>dhoonjang</title>
      </Helmet>
      {diveComplete ? (
        <div className="background-area" ref={canvasRef} />
      ) : (
        <div
          className={cn("dhoonjang", {
            dive,
          })}
          onClick={start}
        >
          dhoonjang
        </div>
      )}
    </div>
  );
};

export default IndexPage;
