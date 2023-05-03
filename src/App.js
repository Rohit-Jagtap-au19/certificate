import "./App.css";
import Excel from "./components/ExcelToJson/Excel";
import Certificate from "./components/certificateGenretor/Certificate";
import Doc from "./components/docToJson/Doc";
import Faq from "./components/faq/Faq";
import TextToSpeech from "./components/textToAudio/TextToSpeech";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Certificate />}></Route>
            <Route exact path="/speech" element={<TextToSpeech />}></Route>
            <Route exact path="/excel" element={<Excel />}></Route>
            <Route exact path="/doc" element={<Doc />}></Route>
            <Route exact path="/faq" element={<Faq />}></Route>

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
