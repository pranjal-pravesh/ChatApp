import { Stack } from "@mui/material";
import { Sidebar } from "./sidebar/sidebar";
import { Threads } from "./threads/threads";
import {useSelector} from 'react-redux';
import { ConversationScreen } from "./conversation/conversation-screen";
import {  Outlet } from "react-router-dom"

export function Main(){

    var theme = useSelector(state => state.theme);
  

    return (
    <Stack direction="row">
        <Sidebar/>
        {/* <Threads/> 
        <ConversationScreen theme={theme} /> */}
        <Outlet />
        {/* <CallThreads />
        <CallDetails theme={theme}/> */}
    </Stack>

    )
}