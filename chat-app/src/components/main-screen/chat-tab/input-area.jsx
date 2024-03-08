import { IconButton, Stack } from "@mui/material";
import { Paperclip, PaperPlaneRight } from "@phosphor-icons/react";

export function InputArea(prop) {
  return (
    <Stack
      sx={{
        height: "60px",
        width: "100%",
        background: prop.theme === "dark" ? "#232323" : "white",
        alignItems: "center",
        transition: "background 200ms",
        minWidth: "0",
        flexShrink: "1",
      }}
      direction="row"
    >
      <IconButton
        sx={{
          color: prop.theme === "dark" ? "white" : "black",
          margin: "0  15px",
        }}
      >
        <Paperclip size={24} weight="light" />
      </IconButton>

      <div style={{ flex: "1" }}>
        <textarea
          placeholder="Type a message"
          className="messageInput"
          style={{
            color: prop.theme === "dark" ? "white" : "black",
            borderColor: "#72727233", // Initial border color
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#4cb5f9"; // Change border color on focus
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#72727233"; // Change border color on blur
          }}
        />
      </div>

      <IconButton
        sx={{
          color: prop.theme === "dark" ? "white" : "black",
          margin: "0  15px",
        }}
      >
        <PaperPlaneRight size={24} weight="light" />
      </IconButton>
    </Stack>
  );
}
