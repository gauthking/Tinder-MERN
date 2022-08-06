import Header from "./Header";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginEmail from "./LoginEmail"
import CreateAcc from "./CreateAcc"
import { useState } from "react";
import { authentication } from "./firebase"
import UserInfo from "./UserInfo";
import { onAuthStateChanged } from "firebase/auth";
import GoogleAuth from "./GoogleAuth";
import TinderCards from "./TinderCards";
import NavigateButtons from "./NavigateButtons";


function App() {
  const [userlog, setUserlog] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<><Header /> <TinderCards /> <NavigateButtons /> </>} />
        <Route path="/userinfo" element={<><Header /><UserInfo /></>} />
        <Route path="/" element={<div className="App"><Login /></div>} />
        <Route path="/loginemail" element={<LoginEmail />} />
        <Route path="/createacc" element={<CreateAcc />} />
        <Route path="/googleauth" element={<GoogleAuth />} />
      </Routes>
    </Router>
  )



}

export default App;
