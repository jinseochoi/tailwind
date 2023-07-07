import React,{useState, useEffect} from "react";
import './App.css';
import {ButtonPage} from "./page/ButtonPage";
import { CheckboxPage } from "./page/CheckboxPage";


function App() {

  const [currentList, setCurrentList] = useState("Button")
  const [currentPage, setCurrentPage] = useState(<ButtonPage/>)

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
  }

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-14 flex items-center justify-center border-b border-[#ccc]">
        <p className="text-xl font-bold">Design Guide</p>
      </div>
      <div className="w-[1440px] h-[calc(100vh_-_56px)] my-0 mx-auto flex">

        {/* left menu */}
        <div className="w-64 h-full overflow-y-auto border-r border-[#ccc]">
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
        <div className="w-[1184px] h-full overflow-y-auto">
          <div className="p-6">
            {currentPage}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
