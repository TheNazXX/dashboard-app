import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [themeColor, setThemeColor] = useState(localStorage.getItem("themeColor") || "#1A97F5");
  const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "light");
  const [isThemeModal, setIsThemeModal] = useState(false);

  const handleThemeMode = (e) => {
    const themeMode = e.target.checked ? "dark" : "light";
    
    setThemeMode(themeMode)
    localStorage.setItem("themeMode", themeMode);
  };

  const handleThemeColor = (color) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color);
    setIsThemeModal(false);
  };

  const handleClickModals = (clicked) => {
    setIsClicked({
      ...initialState, [clicked]: true
    })
  }
  
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,

        isClicked,
        setIsClicked,

        handleClickModals,
        
        screenSize,
        setScreenSize,

        themeColor,
        handleThemeColor,

        themeMode,
        handleThemeMode,

        isThemeModal,
        setIsThemeModal
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext)