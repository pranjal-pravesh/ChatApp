import { Avatar, Button, IconButton, Stack, Switch, Tab, Tabs, ThemeProvider, Typography, createTheme, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleContactDetail } from "../../../features/contact-detail";
import {  Bell, CaretLeft, CaretRight, Phone, Star, VideoCamera, X } from "@phosphor-icons/react";
import ImageViewer from "../../custom-components/image viewer";
import { useState } from "react";

export default function ContactDetail(){

    const [currentWindow, setCurrentWindow] = useState('basicDetail')
    
    const dispatch =  useDispatch();
    const theme = useSelector(state=> state.theme);
    var isVisible = useSelector(state => state.contactDetail);

    const StyledSwitch = styled(Switch)(() => ({
        '& .MuiSwitch-track': {
          backgroundColor: 'grey',
        }}));


    function BasicDetail(){

        return (
        
            <div style={{ display:isVisible?"flex":'none',
                        flexDirection:'column',
                        width:'360px', 
                        height:'100svh', 
                        background: theme==="light"?'rgb(249 249 249)':"black",
                        transition:'background width 200ms', 
                        padding:'15px 20px',   
                        overflow:'auto',
                        flexShrink:'0',
                        }}
                        className="customScrollbar">
                    
                
                
                    <IconButton onClick={()=>dispatch(toggleContactDetail())} 
                        sx={{color:theme==='dark'?'white':'black', position:'absolute', top:'7px', right:'7px'}}>
                        <X size={20} weight="light" />
                    </IconButton>

                

                <Stack sx={{alignItems:'center',}}>
                    <Avatar sx={{width:'150px', height:'150px'}}
                            src='https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8'/>
                
                    <Typography variant="h6" sx={{ color:theme==='dark'?'white':'black', marginTop:'2px'}}>Pranjal Pravesh</Typography>
                    <Typography variant="h7" sx={{ color:'grey'}}>@pranjal.pravesh</Typography>
                </Stack>


                <Stack direction={'row'} sx={{justifyContent:'center', marginTop:'10px', gap:'30px'}}>
                    <IconButton sx={{color:theme==='dark'?'white':'black'}}><Phone size={40} weight="thin" /></IconButton>
                    <IconButton sx={{color:theme==='dark'?'white':'black'}}><VideoCamera size={40} weight="thin" /></IconButton>
                </Stack>


                    <Typography sx={{ color:theme==='dark'?'white':'black', margin:'20px 0 0 0', fontSize:'17px'}}>About</Typography>
                    <Typography sx={{ color:'grey', lineHeight:'18px'}}>
                        My wave function collapses when you see me.
                    </Typography>
                

                
                <Stack sx={{justifyContent:'space-between', marginTop:'30px', alignItems:'center', cursor:'pointer'}} direction={'row'}
                        onClick={()=>{setCurrentWindow('')}}>
                    <Typography sx={{ color:theme==='dark'?'white':'black', fontSize:'17px'}}>Media, Links & Docs</Typography>
                    <CaretRight size={20} style={{color:theme==='dark'?'white':'black'}}/>
                </Stack>

                <Stack direction={'row'} sx={{gap:'5px', justifyContent:'center', paddingTop:'15px'}}>

                    <ImageViewer src='https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64fecc21e15ea565176c74ad_React_Framer_Motion_Main_Image_07ee7c735e.jpg'/>
                    <ImageViewer src='https://picsum.photos/id/337/200'/>
                    <ImageViewer src='https://picsum.photos/id/437/200'/>
                    
                </Stack>

                <Stack sx={{marginTop:'35px', alignItems:'center', cursor:'pointer'}} direction={'row'}>
                    <Star style={{color:theme==='dark'?'white':'black', marginRight:'10px'}} size={20} />
                    <Typography sx={{ color:theme==='dark'?'white':'black', fontSize:'17px'}}>Starred messages</Typography>
                    <CaretRight size={20} style={{marginLeft:'auto', color:theme==='dark'?'white':'black'}} />
                </Stack>

                <Stack sx={{marginTop:'15px', alignItems:'center'}} direction={'row'}>
                    <Bell style={{color:theme==='dark'?'white':'black', marginRight:'10px'}} size={20} />
                    <Typography sx={{ color:theme==='dark'?'white':'black', fontSize:'17px'}}>Mute notifications</Typography>
                    <StyledSwitch sx={{marginLeft:'auto'}}/>
                </Stack>

                <Stack  sx={{justifyContent:'space-between', marginTop:'20px'}}>
                    <Button color="error">Block</Button>
                    <Button color="error">Clear Chat</Button>
                </Stack>
                

            </div>
            
        )
    }

    function Attachments(){

        const [value, setValue] = useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

        const textTheme = createTheme({
            palette: {
                primary:{
                main: '#4cb5f9', //main color
                light: '#81d4fa', // Lighter shade of the main color
                dark: '#2196f3', // Darker shade of the main color
                contrastText: '#fff', // Text color that contrasts well with the main color
            },
                secondary: {
                    main: '#4cb5f9', // Your main color
                    light: '#81d4fa', // Lighter shade of the main color
                    dark: '#2196f3', // Darker shade of the main color
                    contrastText: '#fff', // Text color that contrasts well with the main color
            }

            
          }});

          
        return(
            <div style={{ display:isVisible?"flex":'none',
                        flexDirection:'column',
                        width:'360px', 
                        height:'100svh', 
                        background: theme==="light"?'rgb(249 249 249)':"black",
                        transition:'background width 200ms', 
                        padding:'15px 20px',   
                        overflow:'auto',
                        flexShrink:'0',
                        position:'relative'
                        }}
                        className="customScrollbar">

                <IconButton onClick={()=>{setCurrentWindow('basicDetail')}} 
                        sx={{color:theme==='dark'?'white':'black', position:'absolute', top:'7px', left:'7px'}}>
                        <CaretLeft size={20} weight="light" />
                </IconButton>

                <IconButton onClick={()=>{dispatch(toggleContactDetail())
                                            setCurrentWindow('basicDetail')}} 
                        sx={{color:theme==='dark'?'white':'black', position:'absolute', top:'7px', right:'7px'}}>
                        <X size={20} weight="light" />
                </IconButton>

                <ThemeProvider theme={textTheme}>
                    <Tabs sx={{ marginTop: '30px'}} value={value} onChange={handleChange}
                            variant="fullWidth"
                            textColor='secondary'
                            indicatorColor='secondary'>
                        <Tab label="Media" value={0} sx={{color:theme==='dark'?'white':'black'}}/>
                        <Tab label="Links" value={1} sx={{color:theme==='dark'?'white':'black'}}/>
                        <Tab label="Docs" value={2} sx={{color:theme==='dark'?'white':'black'}}/>
                    </Tabs>
                </ThemeProvider>

                {value===0?
                    
                    <div style={{width:'100%',
                                marginTop:'30px',
                                display:'grid',
                                gridTemplateColumns:'repeat(auto-fit, minmax(min(90px,100%), 1fr))',
                                justifyItems:'center',
                                rowGap:'15px'}}>
                        

                        <ImageViewer style={{width:'95%'}} src='https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64fecc21e15ea565176c74ad_React_Framer_Motion_Main_Image_07ee7c735e.jpg'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/337/200'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/437/200'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/338/200'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/487/200'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/737/200'/>
                        <ImageViewer style={{width:'95%'}} src='https://picsum.photos/id/457/200'/>

                    </div>
                
                :value===1? //Tab2

                <p>Links</p>

                :value===2? //Tab3
                
                <p>Documents</p>

                :null
                }
                

                

            </div>
        )
    }

    return currentWindow==='basicDetail'?<BasicDetail />:<Attachments />

}