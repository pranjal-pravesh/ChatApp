import { Stack } from "@mui/material";
import { Head } from "./head";
import { InputArea } from "./input-area";
import { ChatArea } from "./chat-area";

export function ConversationScreen(prop){
    return (
        <Stack sx={{flexGrow:'1'}}>
            <Head theme={prop.theme}/>
            <ChatArea theme={prop.theme}/>
            <InputArea theme={prop.theme}/>
        </Stack>
    )
}