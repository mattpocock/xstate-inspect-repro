import { inspect } from "@xstate/inspect";
import { useMachine } from "@xstate/react";
import { useEffect, useState } from "react";
import { createMachine } from "xstate";

const machine = createMachine({
  initial: "idle",
  states: {
    idle: {},
  },
});

const HomePage = () => {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    inspect();
    setShouldShow(true);
  }, []);
  return (
    <>
      <iframe data-xstate height="600px" width="1024px" />
      {shouldShow && <Inner />}
    </>
  );
};

const Inner = () => {
  useMachine(machine, { devTools: true });

  return null;
};

export default HomePage;
