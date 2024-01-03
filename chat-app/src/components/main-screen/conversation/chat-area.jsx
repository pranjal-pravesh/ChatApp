import { Stack } from "@mui/material";

export function ChatArea(prop){
    return(
    <Stack sx={{flexGrow:'1', background:prop.theme==='dark'?'#2f2f2f':'rgb(238, 238, 238)'}}>

    </Stack>
    )
}