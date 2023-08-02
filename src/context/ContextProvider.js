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
  const [isClickedModals, setIsClickedModals] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [themeColor, setThemeColor] = useState(localStorage.getItem("themeColor") || "#7352FF");
  const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "dark");
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

  const handleClickModals = (clicked, bool) => {
    setIsClickedModals({
      ...initialState, [clicked]: bool
    });
  };

  const handleCloseAllModals = () => {
    setIsClickedModals({
      ...initialState
    });
  };

  const handleIsThemeModal = (bool) => {
    setIsThemeModal(bool);
    handleCloseAllModals();
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,

        isClickedModals,
        handleClickModals,
        
        screenSize,
        setScreenSize,

        themeColor,
        handleThemeColor,

        themeMode,
        handleThemeMode,

        isThemeModal,
        handleIsThemeModal
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext)