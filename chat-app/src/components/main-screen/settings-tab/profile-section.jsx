import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingsSection } from "../../../features/settings-section";
import { Link } from "react-router-dom";

const ProfileSection = (prop) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const accentColor = useSelector((state) => state.accent);
  const inputStyle = {
    fontFamily: "Roboto",
    fontSize:'14px',
    width:'100%',
    height:'35px',
    marginTop: '15px',
    paddingLeft:'10px',
    borderRadius:'10px',
    backgroundColor:`${theme==='dark'?'#252525':'white'}`,
    border:`1px solid grey`,
    color:theme==='dark'?'white':'black',
    outline: 'none', 
    
  }
  return (
    <Stack
      sx={{
        flex: "1",
        background: theme === "dark" ? "#232323" : "white",
        transition: "background-color 200ms",
        padding: "20px",
        alignItems: "center",
        display: prop.display===1?'flex':'none'
      }}
    >
      <IconButton
        sx={{
          color: theme === "dark" ? "white" : "black",
          display: prop.screenWidth > 820 ? "none" : null,
          alignSelf: "start",
          position:'absolute'
        }}
        onClick={() => {prop.setDisplay(0)
          dispatch(changeSettingsSection(0))}}
        >
          <Link to='/settings'>
            <CaretLeft size={20} />
          </Link>
        </IconButton>

      <Stack
        sx={{
          alignItems: "center",
          width: "50%",
          minWidth: "200px",
          padding: "20px 15px",
          borderRadius: "10px",
        }}
        // direction={"row"}
      >
        
        <Avatar
          sx={{ width: "120px", height: "120px", margin: "20px 10px" }}
          src="https://media.licdn.com/dms/image/D4E03AQHBqWeBZgzLOQ/profile-displayphoto-shrink_800_800/0/1682102966918?e=2147483647&v=beta&t=3h218jhABSX_wWq-yVt8-yCUjO12cSvq-srN_tkYPg8"
        />

        <button
          style={{
            width: "140px",
            height: "35px",
            fontSize: "15px",
            background: accentColor,
            borderRadius: "8px",
            color: "white",
          }}
        >
          Change Photo
        </button>
      </Stack>

      <Stack sx={{
          width: "90%",
          maxWidth: "500px",
          padding: "10px 15px",
          borderRadius: "10px",
          marginTop:'10px'
        }}>
          <Typography sx={{color:theme==='dark'?'white':'black', fontSize:'18px'}}>
                  Name</Typography>
          <input placeholder='Name' style={{...inputStyle, alignSelf:'center'}} />
      </Stack>

      <Stack sx={{
          width: "90%",
          maxWidth: "500px",
          padding: "10px 15px",
          borderRadius: "10px",
          marginTop:'10px'
        }}>
          <Typography sx={{color:theme==='dark'?'white':'black', fontSize:'18px'}}>
                  Username</Typography>
          <input placeholder='Username' style={{...inputStyle, alignSelf:'center'}} />
      </Stack>

      <Stack sx={{
          width: "90%",
          maxWidth: "500px",
          padding: "10px 15px",
          borderRadius: "10px",
          marginTop:'10px'
        }}>
          <Typography sx={{color:theme==='dark'?'white':'black', fontSize:'18px'}}>
                  About</Typography>
          <textarea placeholder='About' style={{...inputStyle, resize:'none', height:'80px', paddingTop:'10px'}} />
      </Stack>
      
    </Stack>
  );
};

export default ProfileSection;
