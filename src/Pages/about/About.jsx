import React from "react";
import Input from "../../components/Input/Input";

const About = () => {
  return (
    <div>
      <Input
        labelName={"Номер телефона"}
        inputType={"tel"}
        inputId={"userPhone"}
        placeholder={"+7 (900) 000-00-00"}
        descValue={"uft_pole_name"}
        question={true}
      />
    </div>
  );
};

export default About;
