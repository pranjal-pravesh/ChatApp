import { Stack, Avatar, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dummyUsers } from '../chat-tab/dummyUsers';
import ContactDetail from '../chat-tab/contact-detail';
import { toggleContactDetailOn } from '../../../features/contact-detail';

const FriendsTab = () => {

    const dispatch =  useDispatch();

    const theme = useSelector(state=>state.theme)

    function Searchbar(){
        return(
            <input type="text" placeholder="Search existing or new friends" style={{
                fontFamily: "Roboto",
                fontSize:'14px',
                width:'clamp(250px, 65%, 700px)',
                height:'40px',
                marginTop: '10px',
                marginBottom:'30px',
                flexShrink:'0',
                paddingLeft:'20px',
                borderRadius:'15px',
                backgroundColor:`${theme==='dark'?'#646363':'white'}`,
                border:`1px solid black`,
                color:`${theme==='dark'?'white':'black'}`,
                outline: 'none', // Remove default focus border
                transition: 'border-color 0.2s ease-in-out', // Add transition for smoother effects
                
            }}
            onFocus={(e) => {
                e.target.style.borderColor = '#4cb5f9'; // Change border color on focus
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'grey'; // Change border color on blur
              }}
            />
        )
    }

    function DisplayFriend(prop){

        const [isHovered, setIsHovered] = useState(false);
        
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        return <Stack direction='row' sx={{alignItems:'center', justifyContent:'space-between', 
                                     padding:'10px 20px', borderRadius:'5px',
                                    width:'clamp(300px, 75%, 800px)',
                                    background:isHovered?'#72727221':null}} 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={()=> dispatch(toggleContactDetailOn())}>
                <Stack direction='row'>
                    <Avatar sx={{width:'45px', height:'45px', marginRight:'10px'}}
                            src={prop.user.profilePic}/>
                    
                    <Stack sx={{justifyContent:'center', overflow:'hidden', minWidth:'100px'}}>{/*profile things */}
                            <p style={{fontSize:'15px', 
                                        lineHeight:'18px',
                                        color:theme==='dark'?'white':'black'}}>
                                {prop.user.name}
                            </p>

                            <p style={{fontSize:'12px', 
                                        lineHeight:'16px',
                                        color:'gray'}}>
                                {prop.user.username}
                            </p>

                    </Stack>
                </Stack>

                
                <Button sx={{fontSize:'11px', border:'1px solid grey', color:'grey'}}
                        color='error'
                        variant='outlined'
                        onClick={(e)=>{e.stopPropagation()}}>Remove</Button>

        </Stack>

    }


  return (
    // Overall tab
    <>
    <Stack sx={{height:'calc(100vh)', flex:'1', flexShrink:'1', alignItems:'center', background:theme==='dark'?'#232323':'white',
                transition:'background 200ms'}}> 

    {/* Searchbar and title container */}
     <Stack sx={{height:'130px', width:'100%', alignItems:'center', padding:'20px 0'}}>
        <Typography variant="h4" sx={{ color:theme==='dark'?'white':'black'}}>Friends</Typography>
        <Searchbar/>
     </Stack>

    {/* Friends list container */}
    <Stack sx={{height:'calc(100vh - 130px)',width:'100%', alignItems:'center', background:theme==='dark'?'#232323':'white',
                transition:'background 200ms', overflow:'auto'}} gap={'5px'}>

        
        {dummyUsers.map(user=>{
            return <DisplayFriend key={user.id} user={user}/> // Display friends
    })}

    </Stack>
    </Stack>
    <ContactDetail/>
    </>
  )
}

export default FriendsTab