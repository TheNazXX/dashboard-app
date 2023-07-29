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

  const [themeColor, setThemeColor] = useState("#03c9d7");
  const [themeMode, setThemeMode] = useState("Light");
  const [isThemeModal, setIsThemeModal] = useState(false);

  const handleThemeMode = (e) => {
    setThemeMode(e.current.value);

    localStorage.setItem("themeMode", e.target.value);
  };

  const handleThemeColor = (e) => {
    setThemeColor(e.current.value);

    localStorage.setItem("themeColor", e.target.value);
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