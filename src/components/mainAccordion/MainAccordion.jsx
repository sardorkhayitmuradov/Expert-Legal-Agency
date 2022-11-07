import React from "react";
import "../mainAccordion/mainAccordion.css";
import one from "../../assets/images/main/number-1.svg";
import two from "../../assets/images/main/number-2.svg";
import three from "../../assets/images/main/number-3.svg";
import four from "../../assets/images/main/number-4.svg";
import five from "../../assets/images/main/number-5.svg";
import fqa from "../../assets/images/main/fqa.png";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Link} from 'react-router-dom';

const MainAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="main_accordion_container">
        <div className="main_accordion_label">
          <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        </div>
        <div className="main_accordion_parent">
          <div className="main_accordion_left">
          <img src={fqa} alt="FQA-image" />
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
                <Typography sx={{ color: "#042668", paddingTop:"7px" }}>
                  Законен ли отчет об оценке в электроном виде?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft:"50px" }}>
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
                <Typography sx={{ color: "#042668", paddingTop:"7px" }}>
                  Может ли нотариус не принять электронный документ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft:"50px" }}>
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
                <Typography sx={{ color: "#042668", paddingTop:"7px" }}>
                  Как можно передать отчет нотариусу?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft:"50px" }}>
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
                <Typography sx={{ color: "#042668", paddingTop:"7px" }}>
                  Какие выдаются документы и в каком виде?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft:"50px" }}>
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
                <Typography sx={{ color: "#042668", paddingTop:"7px" }}>
                Какие документы я получу?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ paddingLeft:"50px" }}>
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
            <br/>
            <Link to="/">Все вопросы</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAccordion;
