import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppContext = ({ children }) => {
  const [openSidebar, setopenSidebar] = useState(false);
  const [openSettingSidebar, setOpenSettingSidebar] = useState(false);
  const [openMenu, setopenMenu] = useState("Dashboard");
  const [activeMenu, setActiveMenu] = useState(window.location.pathname);

  const [topBarFixed, setTopBarFixed] = useState(false);

  const toggleTopbar = () => {
    setTopBarFixed((prev) => !prev);
  };

  return (
    <MyContext.Provider
      value={{
        openSidebar,
        setopenSidebar,
        openMenu,
        setopenMenu,
        activeMenu,
        setActiveMenu,
        openSettingSidebar,
        setOpenSettingSidebar,
        topBarFixed,
        toggleTopbar,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
