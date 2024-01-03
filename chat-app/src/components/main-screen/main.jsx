import { Stack } from "@mui/material";
import { Sidebar } from "./sidebar/sidebar";
import { Threads } from "./threads/threads";
import { useState } from 'react';
import { ConversationScreen } from "./conversation/conversation-screen";

export function Main(){

    var [theme , setTheme] = useState('light')

    const themeColorBackground = theme==='light'?'rgb(238, 238, 238)':'black';
    const themeColorText = theme==='light'?'black':'white';

    function changeTheme(){
        if (theme==='light'){
        setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
    <Stack direction="row">
        <Sidebar themeColorBackground={themeColorBackground} 
                themeColorText={themeColorText} 
                changeTheme={changeTheme}
                theme={theme}/>

        <Threads theme={theme}
                 changeTheme={changeTheme}/>
        <ConversationScreen theme={theme} />
    </Stack>

    )
}