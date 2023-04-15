import "./App.css";
import Sidenav from "./components/Sidenav";
import Certificate from "./components/certificateGenretor/Certificate";
import CertificateGenrator from "./components/certificateGenretor/CertificateGenrator";
import PdfReader from "./components/pdfReader/PdfReader";
import TextToSpeech from "./components/textToAudio/TextToSpeech";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
        <BrowserRouter>
        {/* <Sidenav/> */}
          <Routes>
            <Route exact path='/' element={<PdfReader />}></Route>
            <Route exact path='/speech' element={<TextToSpeech />}></Route>
            <Route exact path='/certificate' element={<Certificate />}></Route>

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
