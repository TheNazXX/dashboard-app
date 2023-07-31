import { GoDotFill } from 'react-icons/go';
import {StackedChart, Button, SparkLine} from "../components";
import {earningData, SparklineAreaData} from "../constants/ecommerceData";
import { useStateContext } from "../context/ContextProvider";

export const Ecommerce = () => {
  const {themeColor} = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3" style={{backgroundColor: themeColor}}> 
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-200">Earnings</p>
              <p className="text-2xl text-gray-100 font-bold">$63,448.72</p>
            </div>
          </div>

          <div className="mt-6">
            <Button 
              title="Download"
              color="white"
              backgroundColor={themeColor}
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-start gap-1 items-center">
          {
            earningData.map(({title, icon, iconColor, iconBg, amount, percentage, pcColor}) => (
              <div key={title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                <button
                  type="button"
                  style={{
                    color: iconColor,
                    backgroundColor: iconBg
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{amount}</span>
                  <span className={`
                    text-sm text-${pcColor} ml-2
                  `}>{percentage}</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600">
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>        
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine 
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>

              <div className="mt-10">
                <Button 
                  color="white"
                  backgroundColor={themeColor}
                  title="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <StackedChart width="320px" height="320px"/>
          </div>
        </div>
      </div>
    </div>
  );
};
