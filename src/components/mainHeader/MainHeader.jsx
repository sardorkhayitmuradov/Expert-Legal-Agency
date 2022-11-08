import React from "react";
import "./mainHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/main/logo.svg";
import phone from "../../assets/images/main/header-phone-icon.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const MainHeader = () => {
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
    padding: "60px",
  };

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav>
      <div className="main_container">
        <div className="main_navbar">
          <NavLink to="/">
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
                    <img src={logo} alt="Logo-image" />
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: "24px",
                      fontFamily: "Rubik",
                      fontWeight: "500",
                    }}
                  >
                    Вход в личный кабинет
                  </Typography>
                    <div className="modal_form" action="#">
                      <label htmlFor="#">Номер телефона</label>
                      <input
                        type="tel"
                        placeholder="+7 (900) 000-00-00"
                        required
                      />
                      <span>uft_pole_name</span>
                      <label className="main_modal_form_label" htmlFor="#">
                        <span>Пароль</span>
                        <span
                          className="modal_form_password_navigate"
                          onClick={() => navigate("/password")}
                        >
                          Забыли пароль?
                        </span>
                      </label>
                      <input type="password" required />
                      <span>uft_pole_name</span>
                      <input className="main_modal_form_btn" type="submit" value="Войти" />
                      <NavLink className="main_modal_form_p" to={'/registration1'}>Регистрация</NavLink>
                    </div>
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
                <a target="_blank" href="tel:+7 (800) 600-85-89">
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
