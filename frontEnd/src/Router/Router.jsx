import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/pages/Menu/Menu";
import SignIn from "../components/pages/Sign/SignIn/SignIn.jsx";
import SignUp from "../components/pages/Sign/SignUp/SignUp.jsx";
const Router = () => {
    return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
         
        </Routes>

      </BrowserRouter>
    );
  };
  
  export default Router;