import { useSelector } from "react-redux";
import { Threads } from "../threads/threads";
import { ConversationScreen } from "./conversation-screen";


export default function ChatTab(){
    var theme = useSelector(state => state.theme);
    return(
        <>
        <Threads/> 
        <ConversationScreen theme={theme} />
        </>
        
    )
}