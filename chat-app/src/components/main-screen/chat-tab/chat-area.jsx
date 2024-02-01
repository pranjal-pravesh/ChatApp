import { Box, Stack } from "@mui/material";
import { dummyMessages } from "./dummy-messages";



export function ChatArea(prop){

  function MessageBox(prop){
       
    return prop.type==='sent'?(
    <Box sx={{background:'#4cb5f9', 
              margin:'5px', 
              color:'white',
              width:'fit-content',
              maxWidth:'60%',
              fontSize:'14px',
              padding:'6px 14px',
              borderRadius:'12px',
              alignSelf:'end',
              whiteSpace: 'pre-line'
              }}>
        {prop.message}
    </Box>
    ):
    <Box sx={{background:'grey',  
              margin:'5px', 
              color:'white',
              width:'fit-content',
              maxWidth:'60%',
              fontSize:'14px',
              padding:'6px 14px',
              borderRadius:'12px',
              alignSelf:'start',
              whiteSpace: 'pre-line'
              }}>
        {prop.message}
    </Box>

}
    return(
    <Stack sx={{height:'calc(100svh - 120px)', background:prop.theme==='dark'?'#2f2f2f':'rgb(238, 238, 238)',
                padding:' 15px 30px', boxSizing:'border-box', overflow:'auto', flexDirection:'column-reverse',
                transition:'background 200ms',
                '&::-webkit-scrollbar': {
                    width: 6,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#ababab',
                    borderRadius: 10,
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    border: 0,
                  },
                }} gap={3}
                >

        {dummyMessages.map((item, index)=>{
            return <MessageBox message={item.message} key={index} type={item.type}/>
        })}

    </Stack>
    )
}