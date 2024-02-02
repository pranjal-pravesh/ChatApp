import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { ChatCircleDots, Phone, VideoCamera } from "@phosphor-icons/react";

export default function CallDetails(prop){
    return(
    <Stack sx={{flex:'1', background:prop.theme==='dark'?'#232323':'white', transition:'background 200ms', alignItems:'center'}}>
        <Box sx={{width:'100%', 
                    height:'55px',                     
                    fontSize:'25px',
                    paddingLeft:'30px',
                    display:'flex',
                    alignItems:'center'}}>
            <Typography variant="h5" sx={{ color:prop.theme==='dark'?'white':'black'}}>Call info</Typography>    
        </Box>

        <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between', background:'#72727221', width:'95%', padding:'10px 20px', borderRadius:'5px'}}>
                <Stack direction='row'>
                    <Avatar sx={{width:'45px', height:'45px', marginRight:'10px'}}
                            src='https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8'/>
                    
                    <Stack sx={{justifyContent:'center'}}>{/*profile things */}
                            <p style={{fontSize:'15px', 
                                        lineHeight:'18px',
                                        color:prop.theme==='dark'?'white':'black'}}>
                                Pranjal Pravesh
                            </p>
                            <p style={{fontSize:'12px', 
                                        lineHeight:'16px',
                                        color:'gray'}}>
                                @pranjal.pravesh
                            </p>

                    </Stack>
                </Stack>

                <Stack direction='row' sx={{alignItems:'center'}} gap='30px'>
                    <IconButton sx={{color:prop.theme==='dark'?'white':'black'}}><ChatCircleDots size={20} weight="light" /></IconButton>
                    <IconButton sx={{color:prop.theme==='dark'?'white':'black'}}><VideoCamera size={20} weight="light" /></IconButton>
                    <IconButton sx={{color:prop.theme==='dark'?'white':'black'}}><Phone size={20}  weight="light" /></IconButton>
                    
                </Stack>

        </Stack>
    </Stack>
)}