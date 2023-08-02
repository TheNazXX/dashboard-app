import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../../context/ContextProvider';

export const LayoutLeftSideModal = ({children, title, isOpened, handleClose}) => {
  const {themeMode, themeColor} = useStateContext();

  const handleClickClose = (e) => {
    if(e.target.id === 'mask'){
      handleClose();
    };
  };
  
  return (
    <div 
      className="bg-half-transparent w-screen fixed top-0 right-0 cursor-pointer"
      style={{
        transition: 'all .1s',
        opacity: isOpened ?  1 : 0,
        zIndex: isOpened ? 100 : -1
      }}
      id="mask"
      onClick={handleClickClose}
    >
      <div 
        className="float-right dark:text-gray-200 dark:bg-secondary-dark-light-bg bg-white cursor-default h-screen overflow-auto"
        style={{
          transition: "all .4s",
          transform: isOpened  ? "translateX(0px)" : "translateX(1000px)"
        }}
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">{title}</p>
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
    </div>
  );
};
