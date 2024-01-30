import { useSelector } from "react-redux";
import { Threads } from "./threads";
import { ConversationScreen } from "./conversation-screen";
import ContactDetail from "./contact-detail";


export default function ChatTab(){
    var theme = useSelector(state => state.theme);
    return(
        <>
        <Threads/> 
        <ConversationScreen theme={theme} />
        <ContactDetail/>
        </>
        
    )
}