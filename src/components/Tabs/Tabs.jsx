import React, { useState } from "react";
import './tab.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
  
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
     
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
     
      content: <RandomComponent />,
    },
  ];

  function handleChange(index) {
    setCurrentTabIndex(index);
    console.log(index);
  }

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""} `}
            onClick={() => handleChange(index)}
            key={tab.label}
          >
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {tabs[currentTabIndex].content}
      </div>
    </div>
  );
}
