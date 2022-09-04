

import { BrowserRouter,Route,  Routes } from "react-router-dom";
import Home from './Home';
import CreatePost from './CreatePost';
import Singin from './signin';
import Signup1 from './signup1';
import Search from "./Search";
import { useState } from "react";
import Subplans from "./Subplans";
import Signup2 from "./signup2";




function App() {
  const [showNav, setShowNav] = useState(true);
  const [side, setSide] = useState(false);
  return (
    <div className="App min-h-screen w-full bg-gray-300 ">
    <BrowserRouter>
    { showNav && <div>
       <Search side={side} Funside={setSide} /> 
       </div> }
      <Routes>
        <Route path="/" element={ <Home FunNav={ setShowNav } side={side}  />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/Signin" element={ <Singin FunNav={ setShowNav }/> }  />
        <Route path="/Signup1" element={ <Signup1 FunNav={ setShowNav }/> } />
        <Route path="/Signup2" element={ <Signup2 FunNav={ setShowNav }/> } />
        <Route path="/SubPlan" element={ <Subplans  FunNav={ setShowNav }/> } />
      </Routes>
      {showNav && <div className="w-full h-32"></div>}
    </BrowserRouter>

  
  </div>
  );
}

export default App;
