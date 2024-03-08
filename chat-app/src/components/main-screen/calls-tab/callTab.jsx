import { useSelector } from "react-redux";
import CallDetails from "./callDetails";
import { CallThreads } from "./callThreads";
import { useState } from "react";

export default function CallTab() {
  var theme = useSelector((state) => state.theme);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const [display, setDisplay] = useState(0); //when display=1, messages will show and when display=0  threads are visible

  return  (
    <>
      <CallThreads
        display={screenWidth > 820 ? 0 : display}
        setDisplay={setDisplay}
        screenWidth={screenWidth}
      />
      <CallDetails
        display={screenWidth > 820 ? 1 : display}
        setDisplay={setDisplay}
        theme={theme}
        screenWidth={screenWidth}
      />
    </>
  )  
}
