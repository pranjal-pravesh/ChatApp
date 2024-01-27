import Stack from '@mui/material/Stack';
import { sidebarIcons } from './sidebarIcons';
import { Divider, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Gear } from '@phosphor-icons/react/dist/ssr';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link , useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../../features/theme'
import {changeTab} from '../../../features/tab'
import { useEffect } from 'react';

export function Sidebar(prop){

    
    const location = useLocation();
    const dispatch = useDispatch()
    var theme = useSelector(state => state.theme);
    const changeTheme = ()=>dispatch(toggleTheme());

    var selected = useSelector(state => state.tab);

    useEffect(() => {
        // Update the selected tab when the location changes
        dispatch(changeTab(location.pathname.slice(1)));
      }, [location.pathname]);


    return( 

        
    <Stack sx={{ width:'60px', alignItems:'center', height:'100svh', paddingTop:'30px', justifyContent:'space-between',
                    backgroundColor:theme==='light'?'rgb(238, 238, 238)':'black',flexShrink:'0',
                    transition:'background-color 200ms'}}>
            <div>
            {sidebarIcons.map((item)=>{
                //renders first three icons with selecting conditions
                if (selected===item.name){
                return (<Link to={item.link} replace='true'>
                <Box sx={{backgroundColor:'#4cb5f9' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px', transitionDuration:'150ms'}} key={item.index}>
                    <IconButton sx={{color:'white'}} key={item.index} >                    
                            {item.icon}                  
                    </IconButton>
                </Box></Link>
                )}
                
                else{
                return <Link to={item.link} replace='true'><Box sx={{backgroundColor:'none' , width:'40px', height:'40px', borderRadius:'50%', margin:'24px 0px', transitionDuration:'150ms'}} key={item.index}>
                    <IconButton sx={{color:theme==='light'?'black':'white'}} key={item.index} >                    
                            {item.icon}                  
                    </IconButton>
                </Box></Link>    
                }
                

            })}

            <Divider sx={{width:'40px', background: prop.theme==='light'?'black':'white'}}/>

            {/**renders the gear icon with selecting condition */}
             {(selected==='settings')?(
                <Link to='/settings' replace='true'>
                <Box sx={{backgroundColor:'#4cb5f9' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}}>
                    <IconButton sx={{color:'white'}}>                    
                        <Gear size={24} weight="light"/>                  
                    </IconButton>
                </Box></Link>
             )
                
                
                :(
                <Link to='/settings' replace='true'>
                <Box sx={{backgroundColor:'none' , width:'40px', height:'40px', borderRadius:'10px', margin:'24px 0px'}}>
                <IconButton  sx={{color:theme==='light'?'black':'white'}}>                    
                    <Gear size={24} weight="light"/>                  
                </IconButton>
                </Box> </Link>
                )      
            }
            </div>
            
            <div>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={theme==='dark'}
                onChange={changeTheme}
                size={24}/>
            </div>
            
            
        </Stack>
        



    )
}

