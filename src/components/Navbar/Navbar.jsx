import { useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../context/ContextProvider';
import avatar from '../../assets/images/avatar.jpg';

const NavButton = ({ title, callback, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={callback} style={{ color }} className="relative text-2xl p-3 rounded-full hover:bg-light-gray dark:hover:bg-secondary-dark-bg">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClickModals, screenSize, setScreenSize, themeColor, themeMode } = useStateContext();

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between item-center p-2 md:mx-6">
      <button className="w-10 h-10 relative rounded-md" onClick={() => setActiveMenu((prev) => !prev)} style={{ backgroundColor: themeColor }}>
        <span className={`absolute w-6 h-[2px] bg-white top-[10px] left-0 right-0 mx-auto rounded-full rotate ${activeMenu ? '-rotate-[135deg] top-[19px]' : 'rotate-0'}`} style={{ transition: 'all .4s' }} />
        <span className={`absolute w-6 h-[2px] bg-white top-1/2 -translate-y-1/2 left-0 right-0 mx-auto rounded-full ${activeMenu ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'all .4s' }} />
        <span className={`absolute w-6 h-[2px] bg-white bottom-[10px] left-0 right-0 mx-auto rounded-full  ${activeMenu ? 'rotate-[135deg] bottom-[19px]' : 'rotate-0'}`} style={{ transition: 'all .4s' }} />
      </button>

      <div className="flex items-center">
        <NavButton title="Cart" callback={() => handleClickModals('cart', true)} color={themeColor} icon={<FiShoppingCart />} />

        <NavButton title="Chat" dotColor={themeMode === 'light' ? '#03C9D7' : '#fff'} callback={() => handleClickModals('chat', true)} color={themeColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor={themeMode === 'light' ? '#03C9D7' : '#fff'} callback={() => handleClickModals('notification', true)} color={themeColor} icon={<RiNotification3Line />} />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg dark:hover:bg-secondary-dark-bg" onClick={() => handleClickModals('userProfile', true)}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> <span className="text-gray-400 font-bold ml-1 text-14">Nazar</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};
