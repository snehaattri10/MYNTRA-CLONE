/*import logo from './logo.svg';*/
/*import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Bag from './Bag';
import Home from './Home';
import FetchItems from '../components/FetchItems';
import {useSelector} from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';



function App() {

  const FetchStatus = useSelector((store) => store.FetchStatus);
  
  return (
    <>
    <Header/>
    <FetchItems/>
     <Outlet/>
    </>
    )
};


export default App;*/



import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner spinner={fetchStatus.currentlyFetching} /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

