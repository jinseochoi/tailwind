import React,{useState, useEffect} from "react";
import './App.css';
import {ButtonPage} from "./page/ButtonPage";
import { CheckboxPage } from "./page/CheckboxPage";
import { TooltipPage } from "./page/TooltipPage";


function App() {

  const [currentList, setCurrentList] = useState("Button")
  const [currentPage, setCurrentPage] = useState(<ButtonPage/>)
  const [isLeftMenuClose, setLeftMenuClose] = useState(true);

  const componentList = [
    {
      name:"Component",
      content:[
        {
          name: "Button",
          tag: <ButtonPage/>
        },
        {
          name: "Checkbox",
          tag: <CheckboxPage/>
        },
        {
          name: "Radio Button",
          tag: <ButtonPage/>
        },
        {
          name: "Badge",
          tag: <ButtonPage/>
        },
        {
          name: "Tooltip",
          tag: <TooltipPage/>
        }]
    },{
      name: "Field",
      content: [
        {
          name: "Text Field",
          tag: <ButtonPage/>
        },
        {
          name: "Dropdown Field",
          tag: <ButtonPage/>
        },
        {
          name: "Date Picker",
          tag: <ButtonPage/>
        },
        {
          name: "Date Range Picker",
          tag: <ButtonPage/>
        }
      ]
    },
  ]

  const selectComponent = (content) => {
    setCurrentList(content.name);
    setCurrentPage(content.tag);
    setLeftMenuClose(true);
  }

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-14 flex items-center justify-center border-b border-[#ccc] relative">
        <div className="w-6 h-6 bg-pink-400 absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer hidden max-md:block" onClick={() => setLeftMenuClose(!isLeftMenuClose)}></div>
        <p className="text-xl font-bold">Design Guide</p>
      </div>
      <div className="max-w-[1440px] h-[calc(100vh_-_56px)] my-0 mx-auto flex">

        {/* left menu */}
        <div className={`w-64 h-full overflow-y-auto overflow-x-hidden border-r border-[#ccc] pl-6 ${isLeftMenuClose ? "max-md:w-0 max-md:pl-0" : "max-md:w-full"}`}>
          {componentList.map((category, index) => 
            <div className="[&:first-child]:pt-6 [&:not(:last-child)]:pb-5">
              <p className="font-bold text-lg mb-2">{category.name}</p>
              <ul className="border-l border-[#eee] ml-2">
                {category.content.map((content, i) => {
                  return <li key={i} className={`px-3 py-2 text-base hover:bg-[#F1F5F9] hover:text-[#13C690] cursor-pointer select-none transition duration-200 ${content.name === currentList ? "text-[#13C690]" : ""}`} onClick={() => selectComponent(content)}>{content.name}</li>
                })}
              </ul>
            </div>
          )}
        </div>

        {/* content */}
        <div className="flex-1 h-full overflow-y-auto overflow-x-hidden">
          <div className="p-6">
            {currentPage}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
