import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Lock, PaintRoller, Password, User } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingsSection } from "../../../features/settings-section";

const SettingsThreads = (props) => {
  var theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const display = props.display;
  const selectedThread = useSelector((state) => state.settingsSection);

  const icons = {
    privacy: () => (
      <Lock
        size={20}
        style={{
          color: theme === "light" ? "black" : "white",
          marginRight: "10px",
        }}
      />
    ),
    profile: () => (
      <User
        size={20}
        style={{
          color: theme === "light" ? "black" : "white",
          marginRight: "10px",
        }}
      />
    ),
    themeIcon: () => (
      <PaintRoller
        size={20}
        style={{
          color: theme === "light" ? "black" : "white",
          marginRight: "10px",
        }}
      />
    ),
    password: () => (
      <Password
        size={20}
        style={{
          color: theme === "light" ? "black" : "white",
          marginRight: "10px",
        }}
      />
    ),
  };

  function SettingThreads(prop) {
    //for handling click
    function handleClick() {}

    //for handling hover
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    //For handling bgcolor when hovered or selected
    function threadBGcolor() {
      if (selectedThread == prop.id) {
        return "#6b686859";
      }
      if (selectedThread !== prop.id && isHovered) {
        return "#72727221";
      } else {
        return "transparent";
      }
    }

    return (
      <Stack
        sx={{
          width: "calc(90% + 6px)",
          height: "60px",
          marginLeft: "5%",
          marginTop: "5px",
          // background: isHovered?'#72727233':null,
          background: threadBGcolor(),
          alignItems: "center",
          borderRadius: "10px",
          padding: "5px 17px",
          position: "relative",
          boxSizing: "border-box",
          flexShrink: "0",
          userSelect: "none",
        }}
        direction="row"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {dispatch(changeSettingsSection(prop.id))
            props.setDisplay(1)}}
        
      >
        <Stack
          sx={{
            height: "50px",
            fontSize: "16px",
            width: "75%",
            marginLeft: "5%",
            fontFamily: "Roboto",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%", alignItems: "center" }}
            direction="row"
          >
            {prop.icon()}
            <p style={{ color: theme === "light" ? "black" : "white" }}>
              {prop.name}
            </p>
          </Stack>
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack
      sx={{
        height: "100svh",
        width: "350px",
        flexShrink: "0",
        backgroundColor: theme === "dark" ? "#282828" : "rgb(251, 251, 251)",
        transition: "background-color 200ms",
        display:display===0?'flex':'none',
        flex: props.screenWidth<820 ? 1 : 'none',
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginLeft: "10%",
            marginTop: "20px",
            color: `${theme === "dark" ? "white" : "black"}`,
          }}
        >
          Settings
        </Typography>
      </Box>

      <div className="threadsContainer" style={{ marginTop: "30px" }}>
        <SettingThreads
          id="1"
          name="Profile"
          icon={icons.profile}
        ></SettingThreads>
        {/* <SettingThreads id='2' name='Privacy' icon={icons.privacy}></SettingThreads> */}
        <SettingThreads
          id="3"
          name="Password"
          icon={icons.privacy}
        ></SettingThreads>
        <SettingThreads
          id="4"
          name="Theme & Accent"
          icon={icons.themeIcon}
        ></SettingThreads>
      </div>
    </Stack>
  );
};

export default SettingsThreads;
