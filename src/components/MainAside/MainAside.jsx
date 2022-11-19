import React, { useState } from "react";
import "../MainAside/mainAside.css";
import phone from "../../assets/images/main/phone-contact.png";
import Input from "../Input/Input";
import axios from "axios";

const MainAside = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [price, setPrice] = useState("");
  // const [count, setCount] = useState("");
  // const [desc, setDesc] = useState("");
  // const [category, setCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // https://razer-api.onrender.com/devices
    axios
      .post("http://epa.yarbek.uz/api/fill/aplications/", {
        name: name,
        phone_number: phoneNumber,
        // price: price,
        // count: count,
        // desc: desc,
        // category: category,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setPhoneNumber("");
    // setCategory("");
    // setCount("");
    // setDesc("");
    // setPrice("");
  };
  const onName = (value) => {
    setName(value);
  };

  const onPhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
      <div className="main_aside">
        <div className="main_aside_container">
          <div className="main_aside_parent">
            <h1>НУЖНА ПОМОЩЬ ИЛИ ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <div className="main_aside_form">
              <div className="main_aside_form_left">
                <p className="main_p">
                  Заполните форму и наш менеджер свяжется с вами <br /> для
                  бесплатной консультации по интересующим вопросам.
                </p>
                <form className="main_form_div" onSubmit={onSubmit}>
                  <div className="main_input_left">
                    <Input
                      labelName={"Имя"}
                      inputType={"text"}
                      inputId={"userName"}
                      placeholder={"Иван"}
                      descValue={"uft_pole_name"}
                      question={false}
                      value={name}
                      onGetValue={onName}
                    />
                  </div>
                  <div className="main_input_right">
                    <Input
                      labelName={"Номер телефона"}
                      inputType={"tel"}
                      inputId={"userPhone"}
                      placeholder={"+7 (900) 000-00-00"}
                      descValue={"uft_pole_name"}
                      question={false}
                      value={phoneNumber}
                      onGetValue={onPhoneNumber}
                    />
                    {/* <input
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                    <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
                    <input type="text" value={category}  onChange={(e) => setCategory(e.target.value)}/>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/> */}
                  </div>
                  <button disabled={!phoneNumber}>Отправить</button>
                </form>
                <div className="main_aside_button">
                  <p>
                    Нажимая на кнопку, вы соглашаетесь на обработку <br />{" "}
                    персональных данных.
                  </p>
                </div>
              </div>
              <div className="main_aside_form_right">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAside;
