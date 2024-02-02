import React from 'react'
import { Box,Stack, Typography} from "@mui/material";
import { useState } from "react";
import { Lock, PaintRoller, Password, User } from "@phosphor-icons/react";
import { useSelector } from 'react-redux';

const Settings = () => {

  var theme = useSelector(state => state.theme);
  const [selectedThread, setSelectedThread] = useState('')

  const icons = {
    privacy: ()=><Lock size={20} style={{color:theme==='light'?'black':'white', marginRight:'10px'}}/>,
    profile: ()=><User size={20} style={{color:theme==='light'?'black':'white', marginRight:'10px'}}/>,
    themeIcon: ()=><PaintRoller size={20} style={{color:theme==='light'?'black':'white', marginRight:'10px'}} />,
    password: ()=><Password size={20} style={{color:theme==='light'?'black':'white', marginRight:'10px'}}/>
  }

  function SettingTab(prop){

    //for handling hover
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    

    //For handling bgcolor when hovered or selected
    function threadBGcolor(){

        if (selectedThread===prop.name){
            return '#6b686859'
        }
        if (selectedThread!==prop.name && isHovered){
            return '#72727221'
        }
        else{
            return 'transparent'
        }
    }
    


    return( 
        
        <Stack sx={{width:'calc(90% + 6px)',
                    height:'60px', 
                    marginLeft:'5%', 
                    marginTop: '5px', 
                    // background: isHovered?'#72727233':null,
                    background: threadBGcolor(),
                    alignItems:'center',
                    borderRadius:'10px',
                    padding:'5px 17px',
                    position:'relative',
                    boxSizing:'border-box',
                    flexShrink:'0',
                    userSelect:'none'           
                    }}
                    direction='row'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={()=>setSelectedThread(prop.name)}>
            
            <Stack sx={{height:'50px', fontSize:'16px', width:'75%', marginLeft:'5%', fontFamily:'Roboto', alignItems:'center'}}>

                <Stack sx={{height:'100%', width:'100%', alignItems:'center'}} direction='row'>
                    {prop.icon()}
                    <p style={{color:theme==='light'?'black':'white'}}>{prop.name}</p>                        
                </Stack>
            </Stack>
        </Stack>
    )
  }
  return (
    <Stack sx={{height:'100svh', width:'350px',flexShrink:'0', 
                backgroundColor:theme==='dark'?'#282828':'rgb(251, 251, 251)',
                transition:'background-color 200ms'}}>
        <Box>
            <Typography variant="h5" sx={{marginLeft:'10%', marginTop:'20px', color:`${theme==='dark'?'white':'black'}`}}>Settings</Typography>
        </Box>


        
        <div className="threadsContainer" style={{marginTop:'30px'}}>
            <SettingTab name='Profile' icon={icons.profile}></SettingTab>
            <SettingTab name='Privacy' icon={icons.privacy}></SettingTab>
            <SettingTab name='Password' icon={icons.privacy}></SettingTab>
            <SettingTab name='Theme & Accent' icon={icons.themeIcon}></SettingTab>
        </div>
        



    </Stack>
    )
}

export default Settings