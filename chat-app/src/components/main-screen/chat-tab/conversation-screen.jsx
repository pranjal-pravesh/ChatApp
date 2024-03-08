import { Stack } from "@mui/material";
import { Head } from "./head";
import { InputArea } from "./input-area";
import { ChatArea } from "./chat-area";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidebarVisibility } from "../../../features/sidebar-visibility";

export function ConversationScreen(prop){
    const display = prop.display;
    const dispatch = useDispatch();

    //when clicked back button, the display value should be 0 and sidebar should be visible
    useEffect(() => {
        const handleBackButton = () => {
            prop.setDisplay(0);
            dispatch(setSidebarVisibility(true));
        };
    
        window.addEventListener('popstate', handleBackButton);
    
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [prop.setDisplay, dispatch, prop]);


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