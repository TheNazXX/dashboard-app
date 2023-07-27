import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '../';
import { useStateContext } from '../../context/ContextProvider';
import avatar from '../../assets/images/avatar.jpg';

const NavButton = ({ title, callback, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={callback} style={{ color }} className="relative text-xl p-3 rounded-full hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {icon}
      </button>
    </TooltipComponent>
  );
};

export const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClickModals,
  screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, []);

  useEffect(() => {
    if(screenSize < 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="flex justify-between item-center p-2 md:mx-6 relative">
      <NavButton title="Menu" callback={() => setActiveMenu((prev) => !prev)} color="blue" icon={<AiOutlineMenu />} />

      <div className="flex items-center">
        
        <NavButton title="Cart" callback={() => handleClickModals('cart')} color="blue" icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03c9d7" callback={() => handleClickModals('chat')} color="blue" icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="#03c9d7" callback={() => handleClickModals('notification')} color="blue" icon={<RiNotification3Line />} />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClickModals('userProfile')}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Nazar</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
