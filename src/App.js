import React, {useState} from 'react';
import TopMenuContainer from './components/top-menu/container';
import Home from './pages/home';

function App() {

  const [mountHome, setMountHome] = useState(true);

  return (
    <div>
      {/* Navigation Bar (Top) */}
      <TopMenuContainer />
      
      {/* Content Container (to be navigated when click on "home", "report", and "about me" hyperlink in the future) */}
      <div className="mt-[150px]">
        { mountHome ? <Home /> : null}
      </div>

      <button className="primary-button" onClick={()=>{setMountHome(false)}}>Unmount Home.jsx</button>
    </div>
  );
}

export default App;