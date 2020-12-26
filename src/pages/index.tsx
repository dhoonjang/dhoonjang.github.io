import * as React from "react";
import cn from "classnames";
// markup
const IndexPage: React.FC = () => {
  const [dive, setDive] = React.useState<boolean>(false);
  const [diveComplete, setDiveComplete] = React.useState<boolean>(false);

  const start = () => setDive(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (dive) setDiveComplete(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [dive]);

  return (
    <div
      className={cn("IndexPage", {
        dive,
      })}
    >
      {!diveComplete && (
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
