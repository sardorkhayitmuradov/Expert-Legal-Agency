import React from "react";
import "../fqa/Fqa.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Footer from "../../components/Footer/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import one from "../../assets/images/main/number-1.svg";
import two from "../../assets/images/main/number-2.svg";
import three from "../../assets/images/main/number-3.svg";
import four from "../../assets/images/main/number-4.svg";
import five from "../../assets/images/main/number-5.svg";
import { useNavigate } from "react-router-dom";

const Fqa = () => {
  const navigate = useNavigate("");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  React.useEffect(() => {
    if (!localStorage.getItem("login_token") || !localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <ProfileHeader />
      <div className="fqa__container">
        <h1 className="fqa__label">ВОПРОС-ОТВЕТ</h1>
        <div className="main_accordion_parent fqa__accordion">
          <div className="main_accordion_left fqa__accordion__left">
            <h2>Популярные вопросы</h2>
          </div>
          <div className="main_accordion_right">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={one} alt="One" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Законен ли отчет об оценке в электроном виде?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={two} alt="Two" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                  Может ли нотариус не принять электронный документ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={three} alt="Three" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                  Как можно передать отчет нотариусу?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={four} alt="Four" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                  Какие выдаются документы и в каком виде?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={five} alt="Five" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                  Какие документы я получу?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="main_accordion_parent fqa__accordion">
          <div className="main_accordion_left fqa__accordion__left">
            <h2>Оплата заказа</h2>
          </div>
          <div className="main_accordion_right">
            <Accordion
              expanded={expanded === "panel77"}
              onChange={handleChange("panel77")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={one} alt="One" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Какими способами можно оплатить заказ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel88"}
              onChange={handleChange("panel88")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={two} alt="Two" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Безопасно ли производить оплату на сайте?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel99"}
              onChange={handleChange("panel99")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={three} alt="Three" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Есть ли гарантия возврата денег?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="main_accordion_parent fqa__accordion">
          <div className="main_accordion_left fqa__accordion__left">
            <h2>Результат оценки</h2>
          </div>
          <div className="main_accordion_right">
            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={one} alt="One" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Как я получу результат оценки?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel18"}
              onChange={handleChange("panel18")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={two} alt="Two" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Как можно передать отчёт об оценке нотариусу?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel19"}
              onChange={handleChange("panel19")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  <img src={three} alt="Three" />
                </Typography>
                <Typography sx={{ color: "#042668", paddingTop: "7px" }}>
                Можно ли заказать бумажный дубликат отчёта?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft: "50px" }}>
                  Полностью. Согласно ст. 11 Закона № 135-ФЗ «Об оценочной{" "}
                  <br />
                  деятельности в Российской Федерации»: <br /> <br /> 1. Отчет
                  составляется на бумажном носителе и (или) в форме <br />{" "}
                  электронного документа. <br /> <br /> 2. Отчет, составленный в
                  форме электронного документа, должен <br />
                  быть подписан усиленной квалифицированной электронной <br />
                  подписьюв соответствии с законодательством Российской <br />
                  Федерации.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fqa;
