import logo from "../src/Assets/Images/logo/logo2.png";
import "./App.css";
import "../src/Assets/CSS/Style.css";
import "../src/Assets/CSS/Header.css";
import "../src/Assets/CSS/Footer.css";
import "../src/Assets/CSS/Aboutus.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LayoutHome from "./Pages/Layout/LayoutHome";
import LayoutAboutUs from "./Pages/Layout/LayoutAboutUs";
import LayoutContactUs from "./Pages/Layout/LayoutContactUs";
import LayoutRegistration from "./Pages/Layout/LayoutRegistration";
import LayoutAwards from "./Pages/Layout/LayoutAwards";
import LayoutGallery from "./Pages/Layout/LayoutGallery";
import LayoutProgramme from "./Pages/Layout/LayoutProgramme";
import LayoutCommittee from "./Pages/Layout/LayoutCommittee";
import LayoutSpeakers from "./Pages/Layout/LayoutSpeakers";
import LayoutImportantdates from "./Pages/Layout/LayoutImportantdates";
import LayoutIndex from "./Pages/Layout/LayoutIndex";
import LayoutTreasurers from "./Pages/Layout/LayoutTreasurers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutIndex />} />
          <Route path="/index" element={<LayoutIndex />} />
          <Route path="/aboutus" element={<LayoutAboutUs />} />
          <Route path="/committees" element={<LayoutCommittee />} />
          <Route path="/awards" element={<LayoutAwards />} />
          <Route path="/speakers" element={<LayoutSpeakers />} />
          <Route path="/registration" element={<LayoutRegistration />} />
          <Route path="/importantdates" element={<LayoutImportantdates />} />
          <Route path="/programme" element={<LayoutProgramme />} />
          <Route path="/gallery" element={<LayoutGallery />} />
          <Route path="/contactus" element={<LayoutContactUs />} />
          <Route path="/treasurers" element={<LayoutTreasurers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
