import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import ChatBot from "react-simple-chatbot";

// ALL POSSIBLE THEME PROPS! //

const theme = {
  // background: "black",
  //   fontFamily:
  headerBgColor: "gray",
  headerFontColor: "#fff",
  // headerFontSize: '15px',
  botBubbleColor: "green",
  botFontColor: "#fff",
  userBubbleColor: "blue",
  userFontColor: "white",
};

const steps = [
  {
    id: "1",
    message:
      "What is your name? You can type it, or simply just say it! (click the mic icon below)",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: 3,
  },
  {
    id: "3",
    message:
      "Hi {previousValue}, nice to meet you... What is one of your hobbies?",
    trigger: 4,
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "Oh, you like {previousValue} too? Awesome!",
  },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot
      headerTitle="ChatterBot"
      recognitionEnable={true}
      speechSynthesis={{ enable: true, lang: "en" }}
      steps={steps}
    />
    ;
  </ThemeProvider>
);

export default App;
