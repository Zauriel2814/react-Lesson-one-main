import React, {useState} from 'react';
import TopMenuContainer from './components/top-menu/container';
import { Outlet } from "react-router-dom"; // ADDED

function App() {

  const [mountPage, setMountPage] = useState(true);

  return (
    <div>
      {/* Navigation Bar (Top) */}
      <TopMenuContainer />
      
      {/* Content Container (to be navigated when click on "home", "report", and "about me" hyperlink in the future) */}
      <div className="mt-[150px]">
        { mountPage ? <Outlet /> : null}
      </div>

      <button className="primary-button" onClick={()=>{setMountPage(false)}}>Unmount.jsx</button>
      <button className="primary-button" onClick={()=>{setMountPage(true)}}>Mount.jsx</button>
    </div>
  );
}

export default App;