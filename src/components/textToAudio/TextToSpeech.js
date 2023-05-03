import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Sidenav from "../Sidenav";

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
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flex: 1, p: 1 }} className="paddingall">
          <Grid container spacing={7}>
            <Grid xs={12} md={4}>
              <Box height={130} />
              <Card
                // sx={{ minWidth: 49 + "%", height: 150 }}
                className="gradientlight"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", flexDirection: "column" }}
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
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    onClick={handleSpeakClick}
                  >
                    Speak
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}

export default TextToSpeech;
