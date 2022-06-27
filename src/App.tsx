import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Gallery from "./page/Gallery";
import UploadImage from "./page/write/UploadImage";
import Write from "./page/write/Write";
import { Main } from "./layout/Main";
import View from "./page/View";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/write/upload-image" element={<UploadImage />}></Route>
          <Route path="/write/write" element={<Write />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          {/* <Route path="/deploy" element={<Deploy />}></Route>
        <Route path="/frame" element={<Frame />}></Route>
        <Route path="/monitor" element={<Monitor />}></Route>
        <Route path="/result/:type" element={<Result />}></Route>{" "} */}
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
