import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/about/About";
import Code from "./Pages/code/Code";
import CodeEmail from "./Pages/codeEmail/CodeEmail";
import Desktop from "./Pages/desktop/Desktop";
import Email from "./Pages/email/Email";
import Error from "./Pages/error/Error";
import Form1 from "./Pages/form1/Form1";
import Form2 from "./Pages/form2/Form2";
import Fqa from "./Pages/fqa/Fqa";
import Login from "./Pages/login/Login";
import Main from "./Pages/main/Main";
import NewPassword from "./Pages/newPassword/NewPassword";
import OrderNew from "./Pages/orderNew/OrderNew";
import Password from "./Pages/password/Password";
import Personal from "./Pages/personal/Personal";
import Profile1 from "./Pages/profile1/Profile1";
import Profile2 from "./Pages/profile2/Profile2";
import Registration1 from "./Pages/registration1/Registration1";
import Registration2 from "./Pages/registration2/Registration2";
import Search from "./Pages/search/Search";
import Services from "./Pages/services/Services";
import Setting from "./Pages/setting/Setting";
import SettingSave from "./Pages/settingSave/SettingSave";


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
