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
      <button type="button" onClick={callback} style={{ color }} className="relative text-xl rounded-full hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

export const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const handleClick = () => {};

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" callback={() => setActiveMenu((prev) => !prev)} color="blue" icon={<AiOutlineMenu />} />

      <div className="flex">
        <NavButton title="Cart" callback={() => handleClick('cart')} color="blue" icon={<FiShoppingCart />} />

        <NavButton title="Chat" dotColor="#03c9d7" callback={() => handleClick('chat')} color="blue" icon={<BsChatLeft />} />

        <NavButton title="Notification" dotColor="#03c9d7" callback={() => handleClick('notification')} color="blue" icon={<RiNotification3Line />} />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Nazar</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};
