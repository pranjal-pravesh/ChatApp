import { useSelector } from "react-redux";
import CallDetails from "./callDetails";
import { CallThreads } from "./callThreads";
import { useEffect, useState } from "react";

export default function CallTab() {
  var theme = useSelector((state) => state.theme);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const [display, setDisplay] = useState(0); //when display=1, messages will show and when display=0  threads are visible

  //when clicked back button, the display value should be 0 
  useEffect(() => {
    const handleBackButton = () => {
        setDisplay(0);
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
        window.removeEventListener('popstate', handleBackButton);
    };
  }, [setDisplay]);

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
