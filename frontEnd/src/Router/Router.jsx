import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../components/pages/Sign/SignIn/SignIn.jsx";
import SignUp from "../components/pages/Sign/SignUp/SignUp.jsx";
import Sidebar from "../components/Layout/SideBar/SideBar.jsx";
const Router = () => {
    return (
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          
        </Routes>

      </BrowserRouter>
    );
  };
  
  export default Router;