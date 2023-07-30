import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../../constants/themeColors';
import { useStateContext } from '../../context/ContextProvider';

import './ThemeSettings.css';

export const ThemeSettings = () => {
  const {themeColor, handleThemeColor, themeMode, handleThemeMode, isThemeModal, setIsThemeModal} = useStateContext();

  const handleCloseThemeModal = (e) => {
    if(e.target.id === 'themeMask'){
      setIsThemeModal(false);
    };
  };
  
  return (
    <div 
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0 cursor-pointer"
      style={{
        transition: 'all .2s',
        opacity: isThemeModal ?  1 : 0,
        zIndex: isThemeModal ? 100 : -1
      }}
      onClick={handleCloseThemeModal}
      id="themeMask"
    >
      <div 
        className="float-right h-screen dark:text-gray-200 dark:bg-secondary-dark-bg bg-white cursor-default"
        style={{
          transition: "all .4s ease-in-out",
          transform: isThemeModal ? "translateX(0px)" : "translateX(1000px)"
        }}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray" onClick={() => setIsThemeModal(false)} style={{ color: '#99ABB4', borderRadius: '50%' }}>
            <MdOutlineCancel />
          </button>
        </div>

        <div className="border-t-1 border-color dark:border-gray-200 p-4 ml-4">
          <p className="font-semibold">Theme Options</p>
          <div className="mt-4">
            <label htmlFor="themeSwitcher" className="theme-custom-label flex items-center">
              <input id="themeSwitcher" name="theme" type="checkbox" className="w-0" onChange={handleThemeMode} value="themeMode" checked={themeMode === "dark"}/>
              <span className="font-bold text-3xl text-[#FBC02D]" id="lightTheme">
                <BsFillSunFill />
              </span>
              <div className="theme-custom-checkbox" />
              <span className="font-bold text-xl text-black dark:text-white" id="darkTheme">
                <BsFillMoonStarsFill />
              </span>
            </label>
          </div>
        </div>
        <div className="border-t-1 border-color dark:border-gray-200 p-4 ml-4">
          <p className="font-semibold">Theme Colors</p>
          <div className="flex flex-wrap gap-3">
            {themeColors.map(({ name, color }, idx) => (
              <TooltipComponent key={idx} content={name} position="TopCenter">
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button 
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{backgroundColor: color}}
                    onClick={() => handleThemeColor(color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white  ${themeColor === color ? "block": "hidden"}`}/>
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
