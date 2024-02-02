import { Avatar, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleContactDetailOn } from "../../../features/contact-detail";

export function Head(prop){
    const dispatch = useDispatch();
    return (
        <Stack sx={{width:'100%', height:'60px', background:prop.theme==='dark'?'#232323':'white', 
                    color:'white', alignItems:'center', padding:'0 20px', transition:'background-color 200ms'}} direction='row'>
                        
            <Stack direction='row' sx={{alignItems:'center', userSelect:'none', cursor:'pointer'}} onClick={()=> dispatch(toggleContactDetailOn())}>
                
                <Avatar sx={{width:'42px', height:'42px', marginRight:'10px'}}
                        src='https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8'/>
                
                <Stack sx={{alignItems:'flex-start'}}>{/*profile things */}
                        <p style={{fontSize:'16px', 
                                    lineHeight:'18px',
                                    color:prop.theme==='dark'?'white':'black'}}>
                            Pranjal Pravesh
                        </p>

                        <p style={{fontSize:'13px', color:'#aaa7a7'}}>Online</p>
                </Stack>

            </Stack>
            
        </Stack>
    )
}