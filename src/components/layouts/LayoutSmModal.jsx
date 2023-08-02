import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../../context/ContextProvider';

export const LayoutSmModal = ({children, title, subtitle, isOpened, handleClose, rightPosition}) => {
  const {themeMode, themeColor} = useStateContext();

  return (
    <div 
      className={`fixed right-1/2 w-full md:w-auto translate-x-1/2 md:translate-x-0 md:right-${rightPosition ? rightPosition : '0'} top-16 dark:bg-secondary-dark-light-bg rounded-xl p-6 md:p-8 shadow-xl bg-gray-100 overflow-auto h-screen md:h-auto`}
      style={{
        transition: "all .2s",
        opacity: isOpened ? 1 : 0,
        zIndex: isOpened ? 10 : -1
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <p className="text-lg font-semibold dark:text-gray-100">{title}</p>
          {subtitle && <p className="text-xs dark:text-white">{subtitle}</p>}
        </div>

        <button 
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full" 
            onClick={handleClose}
            style={{color: themeMode === "dark" ? "grey" : themeColor}}
          >
            <MdOutlineCancel />
        </button>
      </div>

      {children}
    </div>
  );
};

