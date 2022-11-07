import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Code from "./pages/code/Code";
import CodeEmail from "./pages/codeEmail/CodeEmail";
import Desktop from "./pages/desktop/Desktop";
import Email from "./pages/email/Email";
import Error from "./pages/error/Error";
import Form1 from "./pages/form1/Form1";
import Form2 from "./pages/form2/Form2";
import Fqa from "./pages/fqa/Fqa";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import NewPassword from "./pages/newPassword/NewPassword";
import OrderNew from "./pages/orderNew/OrderNew";
import Password from "./pages/password/Password";
import Personal from "./pages/personal/Personal";
import Profile1 from "./pages/profile1/Profile1";
import Profile2 from "./pages/profile2/Profile2";
import Registration1 from "./pages/registration1/Registration1";
import Registration2 from "./pages/registration2/Registration2";
import Search from "./pages/search/Search";
import Services from "./pages/services/Services";
import Setting from "./pages/setting/Setting";
import SettingSave from "./pages/settingSave/SettingSave";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/code' element={<Code/>}/>
          <Route path="/emailcode" element={<CodeEmail />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path='/email' element={<Email />} />
          <Route path='/form1' element={<Form1 />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path="/fqa" element={<Fqa/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/ordernew" element={<OrderNew/>} />
          <Route path='/password' element={<Password/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/profile1' element={<Profile1/>} />
          <Route path="/profile2" element={<Profile2/>} />
          <Route path="/registration1" element={<Registration1/>} />
          <Route path="/registration2" element={<Registration2/>} />
          <Route path='/search' element={<Search/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/setting' element={<Setting/>} />
          <Route path='/settingsave' element={<SettingSave/>} />
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
