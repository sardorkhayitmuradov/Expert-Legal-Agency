import React, { useState } from "react";
import "../../Pages/codeEmail/CodeEmail.css";
import logo from "../../assets/images/main/logo.svg";
import CodeInput from "../../components/CodeInput/CodeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeEmail = () => {
  const notify = () => toast("Oops! Something get wrong! Please again...");
  const navigate = useNavigate();
  const email = window.localStorage.getItem('email');
  console.log(email);
  const [code, setCode] = useState(new Array(5).fill(''));

  const onCodes =(el,index)=> {

    if (isNaN(el.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? el.value : d))]);

    // Focus next input
    if (el.nextSibling) {
      el.nextSibling.focus();
    }

  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://epa.yarbek.uz/api/email/confirmation/', {
        sms_code: code.join(""),
        email:email,
      })
      .then((res) => {
        if(res.data.status === 1){
          window.localStorage.setItem("change_token", res.data.token)
          navigate('/newpassword') 
        }
        notify()
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/email");
    }
  }, []);

  return (
    <>
      <div className="code_mail_container">
        <div className="code_mail_card">
          <div className="code_mail_img">
            <img src={logo} alt="Logo" />
          </div>
          <div className="code_mail_titles">
            <h1>Подтверждение</h1>
            <p>
              Мы вышлем на <span>{email}</span> письмо с кодом
            </p>
            <p>Код из письма</p>
            <CodeInput onGetCodes={onCodes} code={code} />
            <button
              className="code_mail_btn"
              onClick={onSubmit}
            >
              Далее
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEmail;
