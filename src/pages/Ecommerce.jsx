import { GoDotFill } from 'react-icons/go';
import { StackedChart, Button, SparkLine, PieChart, LineChart } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData, dropDownData, recentTransactions, weeklyStats, medicalproBranding } from '../constants/ecommerceData';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../context/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import product9 from '../assets/images/product9.jpg';

const DropDown = ({ themeMode }) => {
  return (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent
        id="time"
        fields={{
          text: 'Time',
          value: 'Id',
        }}
        style={{ border: 'none', color: themeMode === 'dark' && 'white' }}
        value="1"
        dataSource={dropDownData}
        popupHeight="220px"
        popupWidth="120px"
      />
    </div>
  );
};

export const Ecommerce = () => {
  const { themeColor, themeMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3" style={{ backgroundColor: themeColor }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-200">Earnings</p>
              <p className="text-2xl text-gray-100 font-bold">$63,448.72</p>
            </div>
          </div>

          <div className="mt-6">
            <Button title="Download" color="white" backgroundColor={themeColor} borderRadius="10px" size="md" />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-start gap-1 items-center">
          {earningData.map(({ title, icon, iconColor, iconBg, amount, percentage, pcColor }) => (
            <div key={title} className="flex justify-between items-center md:flex-col bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl w-full">
              <button
                type="button"
                style={{
                  color: iconColor,
                  backgroundColor: iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{amount}</span>
                <span
                  style={{ color: pcColor }}
                  className={`
                    text-sm ml-2
                  `}
                >
                  {percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-2 md:m-4 md:pr-10">
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
                <SparkLine themeColor={themeColor} d="line-sparkline" type="Line" height="120px" width="300px" data={SparklineAreaData} color={themeColor} dots={true} />
              </div>

              <div className="mt-10">
                <Button color="white" backgroundColor={themeColor} title="Download Report" borderRadius="10px" />
              </div>
            </div>

            <StackedChart width="320px" height="360px" />
          </div>
        </div>

        <div>
          <div className="rounded-2xl md:w-400 p-4 m-3" style={{ backgroundColor: themeColor }}>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine themeColor={themeColor} id="column-sparkLine" height="100px" width="320px" type="Column" data={SparklineAreaData} color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <PieChart id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-4">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown themeMode={themeMode} />
          </div>

          <div className="mt-8 w-72 md:w-400">
            {recentTransactions.map(({ icon, title, amount, desc, iconColor, iconBg, pcColor }) => (
              <div key={title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    style={{
                      color: iconColor,
                      backgroundColor: iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{title}</p>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </div>

                <p style={{ color: pcColor }}>{amount}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button title="Add" color="white" backgroundColor={themeColor} borderRadius="10px" />
            </div>
            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown themeMode={themeMode} />
          </div>

          <div className="w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex m-4 flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-4 m-3">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            {weeklyStats.map(({ icon, title, amount, desc, iconBg, pcColor }) => (
              <div key={title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button style={{ backgroundColor: iconBg }} className="tex-2xl rounded-full text-white p-3 hover:drop-shadow-xl">
                    {icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{title}</p>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </div>
                <p className="" style={{ color: pcColor }}>
                  {amount}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <SparkLine themeColor={themeColor} id="line-sparklinee" type="Area" height="160px" data={SparklineAreaData} color="gray" dots={true} />
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-4 m-3">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <p className="text-xs cursor-pointer hoder:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-1 px-2 text-gray-200 mt-10">16 APR, 2023</p>

          <div className="flex border-b-1 border-color gap-4 mt-6">
            {medicalproBranding.data.map(({ title, desc }) => (
              <div key={title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{title}</p>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 pb-4 border-b-1 border-color">
            <p className="text-md mb-2 font-semi-bold">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map(({ name, color }) => (
                <p key={name} style={{ backgroundColor: color }} className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs">
                  {name}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-2 pb-4 border-b-1 border-color">
            <p className="text-md mb-2 font-semi-bold">Leaders</p>

            <div className="flex gap-4">
              {medicalproBranding.leaders.map(({ image }, idx) => (
                <img key={image + idx} src={image} alt="leaderIcon" className="rounded-full w-8 h-8" />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-5">
            <Button title="Add" color="white" backgroundColor={themeColor} borderRadius="10px" />
            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-4 m-3">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            <img src={product9} alt="product" className="md:w-96 h-50"/>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-lg">React 19 coming soon!</p>
            <p className="text-gray-400">By Johnathan Doe</p>
            <p className="mt-8 text-sm text-gray-400">This will be the small description for the news you have shown
              here. There could be some great info.
            </p>

            <div className="mt-3">
              <Button 
                title="Read More"
                color="white"
                backgroundColor={themeColor}
                borderRadius="10px"
              />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
