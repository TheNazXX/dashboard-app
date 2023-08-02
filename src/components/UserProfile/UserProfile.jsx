import { LayoutSmModal } from '../layouts/LayoutSmModal';
import { Button } from '../Button/Button';
import { useStateContext } from '../../context/ContextProvider';
import { userProfileData } from '../../constants/userProfileData';

import avatar from '../../assets/images/avatar.jpg';

export const UserProfile = () => {
  const { themeColor, isClickedModals, handleClickModals } = useStateContext();

  const handleClose= () => {
    handleClickModals('userProfile', false);
  };

  return (
    <LayoutSmModal title="User Profile" isOpened={isClickedModals.userProfile} handleClose={handleClose} rightPosition="24">
      <div className="mt-6">
        <div className="flex items-center gap-6 border-b-1 border-color pb-6 md:pr-16">
          <img className='w-32 h-32 rounded-full' src={avatar} alt="User Avatar" />

          <div>
            <p className="text-xl font-semibold dark:text-gray-200">Nazar Shevchuk</p>
            <p className="text-md dark:text-gray-400">Administrator</p>
            <p className="text-md dark:text-gray-400">info@shop.com</p>
          </div>
        </div>

        <div>
          {
            userProfileData.map(({icon, title, desc, iconColor, iconBg}) => (
              <div key={title} className="flex py-6 gap-4 border-b-1 border-color">
                <button
                  className="rounded-md text-2xl p-3"
                  style={{
                    color: iconColor,
                    backgroundColor: iconBg
                  }}
                >
                  {icon}
                </button>
                
                <div>
                  <p className="text-lg font-semibold dark:text-gray-200">{title}</p>
                  <p className="text-sm dark:text-gray-400">{desc}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div className="mt-8 md:pb-0 pb-16">
          <Button 
            title="Logout"
            color="white"
            backgroundColor={themeColor}
            borderRadius="12px"
            width="100%"
          />
        </div>
      </div>
    </LayoutSmModal>
  );
};
