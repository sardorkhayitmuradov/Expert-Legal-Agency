import React, { useState } from "react";
import "../../Pages/code/Code.css";
import logo from "../../assets/images/main/logo.svg";
import CodeInput from "../../components/CodeInput/CodeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {Context as NumberContext} from '../../Context/phoneNumber/phoneNumber'

const Code = ({ setOpen }) => {
  const navigate = useNavigate();
  const phoneNumber = window.localStorage.getItem("phone_number");

  const [code, setCode] = useState(new Array(5).fill(""));

  const onCodes = (el, index) => {
    if (isNaN(el.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? el.value : d))]);

    // Focus next input
    if (el.nextSibling) {
      el.nextSibling.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://epa.yarbek.uz/api/code/",
        {
          sms_code: code.join(""),
          phone_number: phoneNumber,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data.status === 1);
          navigate("/");
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/registration1");
    }
  }, []);

  return (
    <>
      <div className="code_container">
        <div className="code_card">
          <div className="code_card_img">
            <img src={logo} alt="Logo" />
          </div>
          <form className="code_card_titles" onSubmit={onSubmit}>
            <h1>Подтверждение</h1>
            <p>
              Мы вышлем на <span>{phoneNumber}</span> бесплатное SMS с кодом
            </p>
            <p>Код из SMS</p>
            <CodeInput onGetCodes={onCodes} code={code} />
            <button className="code_card_btn">Далее</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Code;
