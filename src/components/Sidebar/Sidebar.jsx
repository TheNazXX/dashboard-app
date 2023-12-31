import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../context/ContextProvider';
import { links } from '../../constants/sidebarLinks';


export const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, themeColor } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    };
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
      <div className="flex justify-between items-center">

        <Link 
          className="flex items-center gap-3 mt-4 text-xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900" 
          to="/dashboard-app" 
          onClick={handleCloseSidebar}
        >
          <SiShopware /> <span>Shoppy</span>
        </Link>

        <TooltipComponent content="Menu" position="BottomCenter">
          <button 
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden" 
            type="button" 
            onClick={handleCloseSidebar}
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>

      </div>

      <div className="mt-10">
        {links.map(({ title, ...item }, idx) => (
          <div key={`${title}${idx}`}>
            <p className="text-gray-400 m-3 mt-4 uppercase">{title}</p>
            {item.links.map(({ name, icon }) => (
              <NavLink
                key={name}
                to={`/${name}`}
                onClick={() => {}}
                className={({ isActive }) => {
                  return `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2
                  ${isActive ? `text-white` : `dark:hover:text-white dark:hover:bg-main-dark-bg hover:bg-gray-200 hover:text-white text-gray-700 dark:text-gray-200`}`
                }}
                style={({isActive}) => ({
                  backgroundColor: isActive && themeColor,
                })}
              >
                {icon}
                <span className="capitalize">{name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
