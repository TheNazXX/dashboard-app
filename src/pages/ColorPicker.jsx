import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import {Header} from '../components';
import { useRef, useState } from "react";



export const ColorPicker = () => {
  const [color, setColor] = useState("#008000");

  const handleChangeColor = ({currentValue: {hex}}) => {
    setColor(hex);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{backgroundColor: color}}/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={handleChangeColor}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={handleChangeColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
