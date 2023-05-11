import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"; // ADDED
import Home from './pages/home'; // ADDED
import AboutMe from './pages/aboutme'; // ADDED


// 1. Generate a browser router component to display in #root.
// 2. The content within the children element will be displayed in the <Outlet /> component within App.js, depending on the current router path.
// 3. Therefore, instead of having App.js render the <Home /> component, it will be incorporated into the browser router.
// 4. The routing is established through the <Link /> component located in ./components/top-menu/HyperLinks.jsx.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about',
                element: <AboutMe />
            },
        ]        
    },
]); // ADDED

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root')); // UPDATED

reportWebVitals();
