import register from "./register.module.css";
import Input from "./input-field";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true)

  return (
    <div className={register.container}>
      <div className={register.form}>
        <Typography sx={{ fontSize: "50px", color: "grey", margin: "30px 0" }}>
          ChatHive
        </Typography>
        <div className={register.input}>
          <Input label="Username" value={username} setValue={setUsername} />
        </div>

        <div className={register.input}>
          <div
            style={{
              height: "100%",
              position: "absolute",
              right: "0",
              display: "flex",
              alignItems:'center',
              zIndex:'1'
            }}
            
          >
            {showPass?
            <IconButton onClick={()=>setShowPass(!showPass)}><Eye size={20} /></IconButton>
            :
            <IconButton onClick={()=>setShowPass(!showPass)}><EyeSlash size={20} /></IconButton>}
          </div>
          <Input
            label="Password"
            value={password}
            setValue={setPassword}
            type={showPass?"password":"text"}
          />
        </div>
        <div className={register.input}>
          <Link to="/chats" replace="true">
            <button className={register.submitButton}>Log in</button>
          </Link>
        </div>
      </div>
      <div
        className={register.form}
        style={{ fontSize: "14px", paddingTop: "20px" }}
      >
        <span>Don't have an account?
        <Link to="/register">
          <span style={{ color: "#4CB5F9" , fontWeight:'600'}}> Sign up</span>
        </Link>
        </span>
      </div>
    </div>
  );
}
