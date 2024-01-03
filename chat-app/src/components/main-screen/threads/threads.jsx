import { Avatar, Box, Button, Stack, Typography } from "@mui/material";


export function Threads(prop){

    var theme = prop.theme;
    const changeTheme = prop.changeTheme;

    function CustomBadge(prop){
        return <span style={{borderRadius:'8px', 
                            backgroundColor:'#4cb5f9', 
                            fontSize:'12px', 
                            minWidth:'16px',
                            height:'16px',
                            display:'flex',
                            padding:'0px 2px',
                            justifyContent:'center',
                            color:'white'}}>
            1
        </span>
    }

    function Searchbar(){
        return(
            <input type="text" placeholder="Search or start a new chat" style={{
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

    function Thread(){
        return( 
            
            <Stack sx={{width:'calc(90% + 6px)',
                        height:'60px', 
                        marginLeft:'5%', 
                        marginTop: '5px', 
                        // background:'#72727233',
                        alignItems:'center',
                        borderRadius:'10px',
                        padding:'5px 17px',
                        position:'relative',
                        boxSizing:'border-box',
                        flexShrink:'0',           
                        }}
                        direction='row'>

                <Avatar src='https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8'/>
                
                <Stack sx={{height:'40px', fontSize:'15px', width:'75%', marginLeft:'5%', fontFamily:'Roboto'}}>

                    <Stack sx={{height:'50%', width:'100%', marginBottom:'2px', justifyContent:'space-between'}} direction='row'>
                        <p style={{color:theme==='light'?'black':'white'}}>Pranjal Pravesh</p>
                        <p style={{color:'grey', fontSize:'10px', display:'flex', alignItems:'center'}}>16:54</p>                        
                    </Stack>

                    <Stack sx={{height:'50%', width:'100%', fontSize:'12px', color:'grey', justifyContent:'space-between'}} direction='row'>
                        <p>Hey there👋</p>
                        <CustomBadge/>
                    </Stack>
                </Stack>
            </Stack>
        )
    }

    return (
    <Stack sx={{height:'100svh', width:'300px',flexShrink:'0', backgroundColor:`${theme==='dark'?'#282828':'rgb(251, 251, 251)'}`}}>
        <Box>
            <Typography variant="h5" sx={{marginLeft:'10%', marginTop:'20px', color:`${theme==='dark'?'white':'black'}`}}>Chats</Typography>
            <Searchbar/>
        </Box>


        
        <div className="threadsContainer">
            <Thread/>
            <Thread/>
            <Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/>
            <Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/><Thread/>
            <Button onClick={()=>{changeTheme('dark')}}>click</Button>
        </div>
        



    </Stack>
    )
}