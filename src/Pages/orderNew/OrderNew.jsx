import React from 'react';
import { useNavigate } from "react-router-dom";

const OrderNew = () => {
    const navigate = useNavigate("");
    React.useEffect(() => {
        if (!localStorage.getItem("login_token") || !localStorage.getItem("token")) {
          navigate("/");
        }
      }, []);
    return (
        <div>
            Order New
        </div>
    );
}

export default OrderNew;
