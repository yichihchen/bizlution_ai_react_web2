import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/tailwind.css"; 

// ✅ 匯入 Home 頁面元件
import Home from "./pages/home";
import Layout from "./layout/header";
import Contact from "./pages/contactpage";
import Aims from "./pages/aims";
import Fms from "./pages/fms";
import Cms from "./pages/cms";

import Devices from "./pages/devices";
import Bxp300 from "./pages/bxp300";
import Bxp301 from "./pages/bxp301";
import Sbc320 from "./pages/sbc320";
import SignEffexdetail from "./pages/signeffexdetail";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* <BrowserRouter> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aims" element={<Aims />} />
          <Route path="/fms" element={<Fms />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/bxp300" element={<Bxp300 />} />
          <Route path="/bxp301" element={<Bxp301 />} />
          <Route path="/sbc320" element={<Sbc320 />} />
          {/* <Route path="/signeffex_detail" element={<SignEffexdetail />} /> */}
          <Route path="/signeffexdetail" element={<SignEffexdetail />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
