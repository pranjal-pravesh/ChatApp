import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {useSelector} from 'react-redux';
import { calls } from "./dummy-call-records";
import { PhoneIncoming, PhoneOutgoing, PhoneX } from "@phosphor-icons/react";


export function CallThreads(){

    var theme = useSelector(state => state.theme);

    const [selectedThread, setSelectedThread] = useState('')



    function Searchbar(){
        return(
            <input type="text" placeholder="Search or start a new call" style={{
                fontFamily: "Roboto",
                fontSize:'14px',
                width:'80%',
                height:'30px',
                marginTop: '15px',
                marginLeft:'10%',
                marginBottom:'10px',
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

    function Thread(prop){

        //for handling hover
        const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
        


        //For displaying last message preview
        function displayCallType(type){

            if (type==='missed'){
                return <span style={{color:'rgb(203 76 90)'}}><PhoneX size={15} style={{display:'inline'}} weight="light" /> Missed</span>
            }else if (type==='incoming'){
                return <span style={{color:'gray'}}><PhoneIncoming size={15} style={{display:'inline'}} weight="light" /> Incoming</span>
            }else if (type==='outgoing'){
                return <span style={{color:'gray'}}><PhoneOutgoing size={15} style={{display:'inline'}} weight="light" /> Outgoing</span>
            }

        }

        //For handling bgcolor when hovered or selected
        function threadBGcolor(){

            if (selectedThread===prop.id){
                return '#6b686859'
            }
            if (selectedThread!==prop.id && isHovered){
                return '#72727221'
            }
            else{
                return 'transparent'
            }
        }
        


        return( 
            
            <Stack sx={{width:'calc(90% + 6px)',
                        height:'70px', 
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
                        onClick={()=>setSelectedThread(prop.id)}>

                <Avatar sx={{height:'50px', width:'50px'}} src={prop.profilePic}/>
                
                <Stack sx={{height:'50px', fontSize:'16px', width:'75%', marginLeft:'5%', fontFamily:'Roboto', alignItems:'center'}}>

                    <Stack sx={{height:'50%', width:'100%', marginBottom:'2px', justifyContent:'space-between'}} direction='row'>
                        <p style={{color:theme==='light'?'black':'white'}}>{prop.name}</p>
                        <p style={{color:'grey', fontSize:'11px', display:'flex', alignItems:'center'}}>{prop.time}</p>                        
                    </Stack>

                    <Stack sx={{height:'50%', width:'100%', fontSize:'14px', color:'grey', justifyContent:'space-between'}} direction='row'>
                        <p>{displayCallType(prop.type)}</p>
                        
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
            <Typography variant="h5" sx={{marginLeft:'10%', marginTop:'20px', color:`${theme==='dark'?'white':'black'}`}}>Calls</Typography>
            <Searchbar/>
        </Box>


        
        <div className="threadsContainer customScrollbar">
            {calls.map((item)=>{
                return <Thread
                    name = {item.name}
                    type = {item.type}
                    time={item.time}
                    profilePic={item.profilePic}
                    id={item.id}
                    key={item.id}
            />
            })}
        </div>
        



    </Stack>
    )
}