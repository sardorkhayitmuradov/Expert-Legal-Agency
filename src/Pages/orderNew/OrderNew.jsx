import React from 'react';

const OrderNew = () => {
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
