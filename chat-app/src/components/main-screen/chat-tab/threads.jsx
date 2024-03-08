import { Avatar, Box, Stack, Typography } from "@mui/material";
import { dummyUsers } from "./dummyUsers";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Threads(props) {
  var theme = useSelector((state) => state.theme);
  const display = props.display;
  const accentColor = useSelector((state) => state.accent);

  const [selectedThread, setSelectedThread] = useState("");

  function Searchbar() {
    return (
      <input
        type="text"
        placeholder="Search or start a new chat"
        style={{
          fontFamily: "Roboto",
          fontSize: "14px",
          width: "80%",
          height: "30px",
          marginTop: "15px",
          marginLeft: "10%",
          marginBottom: "10px",
          paddingLeft: "20px",
          borderRadius: "15px",
          backgroundColor: `${theme === "dark" ? "#646363" : "white"}`,
          border: `1px solid black`,
          color: `${theme === "dark" ? "white" : "black"}`,
          outline: "none", // Remove default focus border
          transition: "border-color 0.2s ease-in-out", // Add transition for smoother effects
        }}
        onFocus={(e) => {
          e.target.style.borderColor = accentColor; // Change border color on focus
        }}
        onBlur={(e) => {
          e.target.style.borderColor = accentColor; // Change border color on blur
        }}
      />
    );
  }

  function Thread(prop) {
    //for handling hover
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    //Custom badge for displaying number of unseen messages
    function CustomBadge() {
      var unreadMessages = parseInt(prop.unreadMessages);
      return unreadMessages !== 0 ? (
        <span
          style={{
            borderRadius: "9px",
            background: accentColor,
            fontSize: "13px",
            minWidth: "18px",
            height: "18px",
            display: "flex",
            justifyContent: "center",
            paddingRight: `${unreadMessages > 9 ? "4px" : null}`,
            paddingLeft: `${unreadMessages > 9 ? "4px" : null}`,
            color: "white",
          }}
        >
          {unreadMessages}
        </span>
      ) : null;
    }

    //For displaying last message preview
    function displayLastMessage(message) {
      if (message.length < 26) {
        return message;
      } else {
        return message.slice(0, 24) + "...";
      }
    }

    //For handling bgcolor when hovered or selected
    function threadBGcolor() {
      if (selectedThread === prop.id) {
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
          height: "70px",
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
        onClick={() => {setSelectedThread(prop.id)
          props.setDisplay(1)}}
      >
        <Avatar sx={{ height: "50px", width: "50px" }} src={prop.profilePic} />

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
            sx={{
              height: "50%",
              width: "100%",
              marginBottom: "2px",
              justifyContent: "space-between",
            }}
            direction="row"
          >
            <p style={{ color: theme === "light" ? "black" : "white" }}>
              {prop.name}
            </p>
            <p
              style={{
                color: "grey",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {prop.lastMessageTime}
            </p>
          </Stack>

          <Stack
            sx={{
              height: "50%",
              width: "100%",
              fontSize: "14px",
              color: "grey",
              justifyContent: "space-between",
            }}
            direction="row"
          >
            <p>{displayLastMessage(prop.lastMessage)}</p>
            <CustomBadge />
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
          Chats
        </Typography>
        <Searchbar />
      </Box>

      <div className="threadsContainer customScrollbar">
        {dummyUsers.map((item) => {
          return (
            <Thread
              name={item.name}
              lastMessage={item.lastMessage}
              lastMessageTime={item.lastMessageTime}
              unreadMessages={item.unreadMessages}
              profilePic={item.profilePic}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </Stack>
  );
}
