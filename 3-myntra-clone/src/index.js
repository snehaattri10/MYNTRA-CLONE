import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './routes/App.js';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Bag from './routes/Bag.js';
import Home from './routes/Home'; 
import {Provider} from 'react-redux';
import myntraStore from './Store';



const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    {path:"/", element:<Home/>,/*loader: postLoader*/},
    {
      path:"/bag",
      element:<Bag/>,
      /*action: createPostAction,*/
    },
  ],
},
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {myntraStore}>
    <RouterProvider router ={router} />
    </Provider>
  </React.StrictMode>
  
);

