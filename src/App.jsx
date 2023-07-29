import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { useStateContext } from './context/ContextProvider';

import './App.css';

export const App = () => {
  const {activeMenu, setIsThemeModal} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-10">

            <TooltipComponent content="Setting" position="Top">
              <button 
                className="text-3xl p-3 hover:bg-blue-700 text-white rounded-full bg-blue-800" 
                type="button"
                onClick={() => setIsThemeModal(true)}
              >

                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          <div 
            className={`${activeMenu ? "left-0" : "-left-full"} w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-10`}
            style={{transition: "all .4s"}}
          >
            <Sidebar />
          </div>

          <div className={
            `relative dark:bg-main-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? "md:pl-72" : "flex-2"}`}
            style={{transition: "all .4s"}}
            >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar /> 
            </div>
      
            <div>
              <ThemeSettings />

              <Routes>
                <Route path="/" element={<Ecommerce />}/>
                <Route path="/ecommerce" element={<Ecommerce />}/>

                <Route path="/orders" element={<Orders />}/>
                <Route path="/employees" element={<Employees />}/>
                <Route path="/customers" element={<Customers />}/>

                <Route path="/kanban" element={<Kanban />}/>
                <Route path="/editor" element={<Editor />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/color-picker" element={<ColorPicker />}/>

                <Route path="/line" element={<Line />}/>
                <Route path="/area" element={<Area />}/>
                <Route path="/bar" element={<Bar />}/>
                <Route path="/pie" element={<Pie />}/>
                <Route path="/financial" element={<Financial />}/>
                <Route path="/color-mapping" element={<ColorMapping />}/>
                <Route path="/pyramid" element={<Pyramid />}/>
                <Route path="/stacked" element={<Stacked />}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
