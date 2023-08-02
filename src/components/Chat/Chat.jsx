import { LayoutSmModal } from '../layouts/LayoutSmModal';
import { chatData } from '../../constants/chatData';
import { Button } from '../Button/Button';
import { useStateContext } from '../../context/ContextProvider';

export const Chat = () => {
  const { themeColor, isClickedModals, handleClickModals } = useStateContext();
  
  const handleClose= () => {
    handleClickModals('cart', false);
  };

  return (
    <LayoutSmModal title="Messages" subtitle="New 5" isOpened={isClickedModals.chat} handleClose={handleClose} rightPosition="60">
      <div className="mt-8">
        {chatData.map(({ image, message, desc, time }) => (
          <div key={time} className="flex items-center gap-4 mt-4 pb-4 px-0 md:px-4 border-b-2 border-color">
            <img className="rounded-full w-10 h-10" src={image} alt="Person Image" />

            <div>
              <p className="text-lg font-semibold dark:text-gray-200">{message}</p>
              <p className="text-sm dark:text-gray-400">{desc}</p>
              <p className="text-sm dark:text-gray-400">{time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button title="See all messages" color="white" backgroundColor={themeColor} borderRadius="12px" width="100%" />
      </div>
    </LayoutSmModal>
  );
};
