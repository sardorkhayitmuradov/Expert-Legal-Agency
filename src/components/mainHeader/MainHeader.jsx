import React, { useState } from "react";
import "./mainHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/main/logo.svg";
import phone from "../../assets/images/main/header-phone-icon.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../../components/Input/Input";
import axios from "axios";

const MainHeader = () => {
  const [userPhone , setUserPhone] = useState('')
  const [userPassword , setUserPassword] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault();
    axios
      .post('https://maruf.pythonanywhere.com/api/login/', {
        phone_number: userPhone,
        password: userPassword,
      })
      .then((res) => {
        console.log(res.data);
        // navigate('/profile2')
      })
      .catch((err) => {
        console.log(err);
      });
    setUserPhone('');
    setUserPassword('');
  }

  const onPhone = (value) => {
    setUserPhone(value)
  }

  const onPassword = (value) => {
    setUserPassword(value)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    height: 584,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "30px",
    padding: "70px",
  };

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <nav>
      <div className="main_container">
        <div className="main_navbar">
          <NavLink>
            {" "}
            <ul className="navbar_left_ul">
              <li className="nav_logo_img">
                <img src={logo} alt="" />
              </li>
              <li className="nav_line"></li>
              <li className="nav_logo_content">
                Экспертно-Правовое <br /> Агентство
              </li>
            </ul>
          </NavLink>
          <ul className="navbar_right_ul">
            <li className="sign_in">
              <button onClick={handleOpen}>Вход</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <img src={logo} alt="Logo" />
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: "23px",
                      fontFamily: "Rubik",
                      fontWeight: "500",
                      paddingBottom: "20px",
                    }}
                  >
                    Вход в личный кабинет
                  </Typography>
                  <form className="modal_form" onSubmit={onSubmit}>
                    <Input
                      labelName={"Номер телефона"}
                      inputType={"tel"}
                      inputId={"userPhoneNumber"}
                      placeholder={"+7 (900) 000-00-00"}
                      descValue={"uft_pole_name"}
                      value={userPhone}
                      onGetValue={onPhone}
                      question={false}
                    />
                    <label className="main_modal_form_label" htmlFor="#">
                      <span>Пароль</span>
                      <span
                        className="modal_form_password_navigate"
                        onClick={() => navigate("/password")}
                      >
                        Забыли пароль?
                      </span>
                    </label>
                    <Input
                      inputType={"password"}
                      inputId={"userPassword"}
                      descValue={"uft_pole_name"}
                      value={userPassword}
                      onGetValue={onPassword}
                    />
                    <button
                      className="main_modal_form_btn" 
                    >Войти</button>
                    <NavLink
                      to={"/registration1"}
                      className="main_modal_form_p"
                    >
                      Регистрация
                    </NavLink>
                  </form>
                </Box>
              </Modal>
            </li>
            <li className="sign_up">
              <button onClick={() => navigate("/registration1")}>
                Регистрация
              </button>
            </li>
            <li className="phone_comp">
              <img src={phone} alt="" />
              <div className="phone_number">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+7 (800) 600-85-89"
                >
                  {" "}
                  <p>+7 (800) 600-85-89</p>
                  <p>9:30 - 18:30 по МСК (ежедневно)</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
