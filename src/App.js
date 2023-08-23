import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Components/Explore";
import Home from "./Components/Home";
import Settings from "./Components/Settings";
import Statistics from "./Components/Statistics";
 
function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
