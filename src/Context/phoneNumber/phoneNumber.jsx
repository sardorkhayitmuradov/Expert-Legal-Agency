import React from "react";

const Context = React.createContext();

const Provider = ({children}) => {
    const [number, setNumber] = React.useState('');

  return (
    <Context.Provider value={{number, setNumber}}>{children}</Context.Provider>
  )
};

export { Context, Provider };

export default Provider;