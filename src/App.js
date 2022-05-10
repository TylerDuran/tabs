import './App.css';
import React, { useState } from 'react';
import DisplayTabs from './components/DisplayTabs';


function App() {

  const [tabs] = useState([
    {
      title: "Tab 1",
      content: "This is Tab 1 content"
    },
    {
      title: "Tab 2",
      content: "This is Tab 2 content"
    },
    {
      title: "Tab 3",
      content: "This is Tab 3 content"
    }
  ]);


  return (
    <div className="App">
      <DisplayTabs tabs={tabs}/>
    </div>
  );
}

export default App;
