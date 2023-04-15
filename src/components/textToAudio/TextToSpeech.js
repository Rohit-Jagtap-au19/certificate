import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

function TextToSpeech() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeakClick = () => {
    const message = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(message);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box height={20} />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        // style={{ padding: "2% 10%" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            value={text}
            onChange={handleTextChange}
            style={{
              width: "300px",
              marginBottom: "10px",
              border: "none",
              borderBottom: "1px solid black",
              padding: "10px",
              fontSize: "20px",
            }}
            placeholder="Enter text"
          />
          <Button variant="contained" onClick={handleSpeakClick}>
            Speak
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TextToSpeech;
