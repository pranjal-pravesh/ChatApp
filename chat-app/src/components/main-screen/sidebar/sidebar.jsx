import Stack from '@mui/material/Stack';
import { sidebarIcons } from './sidebarIcons';
import { Divider, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Gear } from '@phosphor-icons/react/dist/ssr';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Sidebar(prop){

    var [selected, setSelected] = useState(0)

    var themeColorBackground = prop.themeColorBackground;
    var themeColorText = prop.themeColorText;
    const changeTheme = prop.changeTheme;


    return( 

        
    <Stack sx={{ width:'60px', alignItems:'center', height:'100svh', paddingTop:'30px', justifyContent:'space-between',
                    backgroundColor:`${themeColorBackground}`,flexShrink:'0'}}>
            <div>
            {sidebarIcons.map((item)=>{
                //renders first three icons with selecting conditions
                if (selected===item.index){
                return (
                <Box sx={{backgroundColor:'#4cb5f9' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}} key={item.index}>
                    <IconButton sx={{color:'white'}} key={item.index} onClick={()=>setSelected(item.index)}>                    
                            {item.icon}                  
                    </IconButton>
                </Box>
                )}else{
                return <Box sx={{backgroundColor:'none' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}} key={item.index}>
                    <IconButton sx={{color:`${themeColorText}`}} key={item.index} onClick={()=>setSelected(item.index)}>                    
                            {item.icon}                  
                    </IconButton>
                </Box>    
                }
                

            })}

            <Divider sx={{width:'40px', background: prop.theme==='light'?'black':'white'}}/>

            {/**renders the gear icon with selecting condition */}
             {(selected===3)?(
                
                <Box sx={{backgroundColor:'#4cb5f9' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}}>
                    <IconButton sx={{color:'white'}} onClick={()=>setSelected(3)}>                    
                        <Gear size={24} weight="light"/>                  
                    </IconButton>
                </Box>
             )
                
                
                :(
                <Box sx={{backgroundColor:'none' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}}>
                <IconButton onClick={()=>setSelected(3)} sx={{color:`${themeColorText}`}}>                    
                    <Gear size={24} weight="light"/>                  
                </IconButton>
                </Box> 
                )      
            }
            </div>
            
            <div>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={prop.theme==='dark'}
                onChange={changeTheme}
                size={24}/>
            </div>
            
            
        </Stack>
        



    )
}

