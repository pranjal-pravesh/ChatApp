import { Box, IconButton, Stack } from "@mui/material";
import { dummyMessages } from "./dummy-messages";
import { useRef, useState } from "react";
import { ContextMenu } from 'primereact/contextmenu';
import { ArrowBendUpLeft, ArrowBendUpRight, DotsThreeOutlineVertical, DotsThreeVertical, Trash } from "@phosphor-icons/react";
import { useSelector } from "react-redux";


export function ChatArea(prop){

  const accentColor = useSelector((state) => state.accent);


  const cm = useRef(null);
    const contextMenuItems =  [
      {
          label: 'Copy',
          icon: 'pi pi-copy'
          
      },
      {
          label: 'Reply',
          icon: <ArrowBendUpLeft style={{color:'white', marginRight:'8px'}} size={16} weight="bold" />,
          command: () => {}
      },

      {
          label: 'Forward',
          icon: <ArrowBendUpRight style={{color:'white', marginRight:'8px'}} size={16} weight="bold" />
      },
      {
        label: 'Detele',
        icon: <Trash style={{color:'white', marginRight:'8px'}} size={16} weight="bold" />
    },
    ];

  function MessageBox(prop){

    const [isHovered, setIsHovered] = useState(false)
       
    return prop.type==='sent'?(

    <Stack sx={{justifyContent:'end',}} direction={'row'} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>

      {isHovered&&
      <IconButton sx={{marginLeft:'auto', color:'grey'}} 
                  onClick={(e) => cm.current.show(e)}>
        <DotsThreeOutlineVertical size={18} style={{width:'30px'}} weight="fill"/></IconButton>
      }

      <div className="message" style={{background:accentColor, 
                margin:'5px', 
                color:'white',
                width:'fit-content',
                maxWidth:'70%',
                fontSize:'14px',
                padding:'6px 14px',
                borderRadius:'12px',
                
                whiteSpace: 'pre-line'
                }}
                onContextMenu={(e) => cm.current.show(e)}>
          {prop.message}
      </div>
    </Stack>
    ):

    <Stack direction={'row'} sx={{justifyContent:'start',}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
    <div className="message" style={{background:'grey',  
              margin:'5px', 
              color:'white',
              width:'fit-content',
              maxWidth:'60%',
              fontSize:'14px',
              padding:'6px 14px',
              borderRadius:'12px',
              whiteSpace: 'pre-line'
              }}
              onContextMenu={(e) => cm.current.show(e)}>
        {prop.message}
    </div>

    {isHovered&&
    <IconButton sx={{marginRight:'auto', color:'grey'}} 
      onClick={(e) => cm.current.show(e)}><DotsThreeOutlineVertical size={18} style={{width:'30px'}} weight="fill"/></IconButton>
    }

    </Stack>

}
    return(
    <Stack sx={{height:'calc(100svh - 120px)', background:prop.theme==='dark'?'#2f2f2f':'rgb(238, 238, 238)',
                padding:' 15px 10px', boxSizing:'border-box', overflow:'auto', flexDirection:'column-reverse',
                transition:'background 200ms',
                }} gap={1}
                >
        <ContextMenu model={contextMenuItems} ref={cm} />
        {dummyMessages.map((item, index)=>{
            return <MessageBox message={item.message} key={index} type={item.type}/>
        })}

    </Stack>
    )
}