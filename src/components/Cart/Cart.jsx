import { useStateContext } from '../../context/ContextProvider';
import { LayoutLeftSideModal } from '../layouts/LayoutLeftSideModal';
import { cartData } from '../../constants/cartData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Button } from '../../components';

export const Cart = () => {
  const { isClickedModals, handleClickModals, themeColor, themeMode } = useStateContext();
  const handleClose = () => {
    handleClickModals('cart', false);
  };

  return (
    <LayoutLeftSideModal title="Shopping Cart" isOpened={isClickedModals.cart} handleClose={handleClose}>
      <div className="px-12">
        {cartData.map(({ image, category, price, name }) => (
          <div key={name} className="flex items-center gap-4 border-b-1 border-gray-500 py-6">
            <img className="w-24 h-80 rounded-md" src={image} alt="product-img" />

            <div>
              <p className="text-md font-semibold">{name}</p>
              <p className="text-sm text-gray-400">{category}</p>

              <div className="mt-3 flex items-center gap-4">
                <p className="text-md font-semibold">{price}</p>

                <div className="flex items-center border-1 rounded-md"
                  style={{
                    borderColor: themeMode === 'dark' ? "grey" : themeColor
                  }}
                >
                  <button className="text-green-600  py-4 px-2 hover:opacity-60">
                    <AiOutlinePlus />
                  </button>
                  <p className="text-green-600 px-2 py-1 border-x-1 border-slate-600"
                    style={{
                      borderColor: themeMode === 'dark' ? "gray" : themeColor
                    }}
                  >0</p>
                  <button className="text-red-600 py-4 px-2 hover:opacity-60">
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-5  md:pb-0 pb-10">
          <div className="flex justify-between dark:text-gray-200 text-md">
            <p>Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>

          <div className="mt-2 mb-6 flex justify-between dark:text-gray-200 text-md">
            <p>Total</p>
            <p className="font-semibold">$890</p>
          </div>

          <Button
            width="100%"
            title="Place Order"
            color="white"
            backgroundColor={themeColor}
            borderRadius="10px"
          />
        </div>
      </div>
    </LayoutLeftSideModal>
  );
};
