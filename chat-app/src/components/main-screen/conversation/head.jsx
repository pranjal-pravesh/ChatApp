import { Avatar, Stack } from "@mui/material";


export function Head(prop){
    return (
        <Stack sx={{width:'100%', height:'55px', background:prop.theme==='dark'?'#232323':'white', 
                    color:'white', alignItems:'center', padding:'0 20px'}} direction='row'>
            <Stack direction='row' sx={{alignItems:'center'}}>

                <Avatar sx={{width:'35px', height:'35px', marginRight:'10px'}}
                        src='https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8'/>
                
                <Stack sx={{alignItems:'flex-start'}}>{/*profile things */}
                        <p style={{fontSize:'14px', 
                                    lineHeight:'18px',
                                    color:prop.theme==='dark'?'white':'black'}}>
                            Pranjal Pravesh
                        </p>

                        <p style={{fontSize:'12px', color:'#aaa7a7'}}>Online</p>
                </Stack>

            </Stack>
            
        </Stack>
    )
}