import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Spash from './pages/Spash/Spash';
import Login from './pages/Login/Login';
import Onboard1 from "./pages/Onboard1/Onboard1"
import Onboard2 from './pages/Onboard1/Onboard2';
import Onboard3 from './pages/Onboard1/Onboard3';
import Onboard4 from "./pages/Onboard1/Onboard4"
import Home from "./pages/Home/Home"
import HomeFilled from "./pages/Home/HomeFilled"
import Check from './pages/Check/Check';
import Exam from "./pages/Exam/Exam"
import Setting from './pages/UserSetting/Setting';
function App() {
  return (
    <Router>
      <div className="App">
        
          <Header />
          <Routes>
            <Route path="/" exact element={<Spash />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/onboard1"  element={<Onboard1 />} />
            <Route path ="/onboard2" exact element={<Onboard2 />} />
            <Route path ="/onboard3" exact element={<Onboard3 />} />
            <Route path ="/onboard4" exact element={<Onboard4 />} />
            <Route path="/emptyhome" exact element={<Home />} /> 
            <Route path ="/home" exact element={<HomeFilled />} />
            <Route path="/check" exact element={<Check />} />
            <Route path="/exam" exact element={<Exam />} />
            <Route path="/setting" exact element={<Setting />} />
          </Routes> 
        
      </div>
      </Router>
  );
}

export default App;
