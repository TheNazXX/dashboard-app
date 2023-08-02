import { BsCheck, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../../constants/themeColors';
import { useStateContext } from '../../context/ContextProvider';
import { LayoutLeftSideModal } from '../layouts/LayoutLeftSideModal';

import './ThemeSettings.css';

export const ThemeSettings = () => {
  const { themeColor, handleThemeColor, themeMode, handleThemeMode, isThemeModal, handleIsThemeModal } = useStateContext();

  return (
    <LayoutLeftSideModal title="Settings" isOpened={isThemeModal} handleClose={() => handleIsThemeModal(false)}>
      <div className="border-t-1 border-color dark:border-gray-200 p-4 ml-4">
        <p className="font-semibold">Theme Options</p>
        <div className="mt-4">
          <label htmlFor="themeSwitcher" className="theme-custom-label flex items-center">
            <input id="themeSwitcher" name="theme" type="checkbox" className="w-0" onChange={handleThemeMode} value="themeMode" checked={themeMode === 'dark'} />
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
                <button className="h-10 w-10 rounded-full cursor-pointer" style={{ backgroundColor: color }} onClick={() => handleThemeColor(color)}>
                  <BsCheck className={`ml-2 text-2xl text-white  ${themeColor === color ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </TooltipComponent>
          ))}
        </div>
      </div>
    </LayoutLeftSideModal>
  );
};
