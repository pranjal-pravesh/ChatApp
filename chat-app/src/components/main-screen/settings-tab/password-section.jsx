import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PasswordSection = () => {
  const theme = useSelector((state) => state.theme);
  const accentColor = useSelector((state) => state.accent);

  const [currentPassValue, setCurrentPassValue] = useState("");
  const [newPassValue, setNewPassValue] = useState("");
  const [confirmPassValue, setConfirmPassValue] = useState("");

  const inputStyle = {
    fontFamily: "Roboto",
    fontSize: "14px",
    width: "100%",
    height: "35px",
    marginTop: "15px",
    paddingLeft: "20px",
    borderRadius: "10px",
    backgroundColor: `${theme === "dark" ? "#252525" : "white"}`,
    border: `1px solid grey`,
    color: theme === "dark" ? "white" : "black",
    outline: "none",
  };

  return (
    <Stack
      sx={{
        flex: "1",
        background: theme === "dark" ? "#232323" : "white",
        transition: "background-color 200ms",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "50%",
          minWidth: "300px",
          margin: "30px 0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ color: theme === "dark" ? "white" : "black", fontSize: "20px" }}
        >
          Change Password
        </Typography>

        <input
          type="password"
          placeholder="Current Password"
          style={inputStyle}
          value={currentPassValue}
          onChange={(e) => setCurrentPassValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          style={inputStyle}
          value={newPassValue}
          onChange={(e) => setNewPassValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          style={inputStyle}
          value={confirmPassValue}
          onChange={(e) => setConfirmPassValue(e.target.value)}
        />
        <button
          style={{
            background: accentColor,
            height: "30px",
            color: "white",
            fontSize: "15px",
            width: "100px",
            margin: "15px 0",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </Stack>
    </Stack>
  );
};

export default PasswordSection;
