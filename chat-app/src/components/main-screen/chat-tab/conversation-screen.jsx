import { Stack } from "@mui/material";
import { Head } from "./head";
import { InputArea } from "./input-area";
import { ChatArea } from "./chat-area";

export function ConversationScreen(prop){
    const display = prop.display;

    return (
        <>
        <Stack sx={{flexGrow:'1', display:display===1?'flex':'none'}}>
            <Head theme={prop.theme} setDisplay={prop.setDisplay}/>
            <ChatArea theme={prop.theme}/>
            <InputArea theme={prop.theme}/>
        </Stack>
        </>
    )
}