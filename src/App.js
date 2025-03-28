import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
// import logo from './logo.svg';
import './App.css';
import About from "./routes/about/about.component";
import Twitch from "./routes/twitch/twitch.component";
import Merch from "./routes/merch/merch.component";

const App = () => {
  return (
    <div className="main-content">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="twitch" element={<Twitch />} />
        <Route path="merch" element={<Merch />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
