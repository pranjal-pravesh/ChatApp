import { useSelector } from "react-redux";
import { Threads } from "./threads";
import { ConversationScreen } from "./conversation-screen";
import ContactDetail from "./contact-detail";
import { useState } from "react";

export default function ChatTab() {
  var theme = useSelector((state) => state.theme);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const [display, setDisplay] = useState(0); //when display=1, messages will show and when display=0  threads are visible
  return (
    <>
      <Threads
        display={screenWidth > 820 ? 0 : display}
        setDisplay={setDisplay}
        screenWidth={screenWidth}
      />
      <ConversationScreen
        display={screenWidth > 820 ? 1 : display}
        setDisplay={setDisplay}
        theme={theme}
      />
      <ContactDetail />
    </>
  );
}
