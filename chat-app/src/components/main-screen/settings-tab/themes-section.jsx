import { Avatar, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../features/theme";
import { setAccent } from "../../../features/accent";

const ThemesSection = () => {

  const theme = useSelector((state) => state.theme);
  const accentColor = useSelector((state) => state.accent);
  const dispatch = useDispatch();
  const [selectedAccent, setSelectedAccent] = useState(1);
  
  const inputStyle = {
    fontFamily: "Roboto",
    fontSize: "14px",
    width: "100%",
    height: "35px",
    marginTop: "15px",
    paddingLeft: "10px",
    borderRadius: "10px",
    backgroundColor: `${theme === "dark" ? "#252525" : "white"}`,
    border: `1px solid grey`,
    color: theme === "dark" ? "white" : "black",
    outline: "none",
  };

  const accentIconStyle = {
    height: "40px",
    aspectRatio: "1",
    borderRadius: "50%",
    background: "white",
    marginRight: "10px",
    marginTop: "10px",
    transform: "rotate(50deg)",
    transition:'all 100ms'
  };
  return (
    <Stack
      sx={{
        flex: "1",
        background: theme === "dark" ? "#232323" : "white",
        transition: "background-color 200ms",
        padding: "20px",
        alignItems: "center",
        
      }}
    >
      <Stack
        sx={{
          width: "50%",
          minWidth: "300px",
          padding: "10px 15px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{ color: theme === "dark" ? "white" : "black", fontSize: "18px" }}
        >
          Theme
        </Typography>

        <select style={inputStyle} value={theme} onChange={(e)=>dispatch(setTheme(e.target.value))}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='dark'>System Default</option>
        </select>
      </Stack>

      <Stack
        sx={{
          width: "50%",
          minWidth: "300px",
          padding: "10px 15px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{ color: theme === "dark" ? "white" : "black", fontSize: "18px" }}
        >
          Accent Color
        </Typography>
        <Stack sx={{ alignItems: "center" }} direction={"row"}>
          <div
            style={{
              ...accentIconStyle,
              background: "#49AEEF",
              aspectRatio: accentColor === '#49AEEF' ? "0.7" : "1",
            }}
            onClick={() => {setSelectedAccent(1)
              dispatch(setAccent("#49AEEF"))}}
          ></div>
          <div
            style={{
              ...accentIconStyle,
              background: "red",
              aspectRatio: accentColor === 'red' ? "0.7" : "1",
            }}
            onClick={() => {setSelectedAccent(2)
              dispatch(setAccent('red'))}}
          ></div>
          <div
            style={{
              ...accentIconStyle,
              background: "orange",
              aspectRatio: accentColor === 'orange' ? "0.7" : "1",
            }}
            onClick={() => {setSelectedAccent(3)
              dispatch(setAccent('orange'))}}
          ></div>
          <div
            style={{
              ...accentIconStyle,
              background: "purple",
              aspectRatio: accentColor === 'purple' ? "0.7" : "1",
            }}
            onClick={() => {setSelectedAccent(4)
                            dispatch(setAccent('purple'))}}
          ></div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ThemesSection;
