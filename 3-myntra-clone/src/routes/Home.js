 /*import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem';


 const Home = () => {

   const items = useSelector( store => store.items);
   console.log("items....");

  return(
  <main>
    <div className='items-container'>
    {items && items.map(item => <HomeItem key={item.id} item={item} />)}
  </div>
  </main>
  );
 };

 export default Home;*/


 /*import React from 'react';
import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem';

const Home = () => {
  const items = useSelector(store => store.items);
  console.log("items:", items);

  return (
    <main>
      <div className='items-container'>
        {items && items.map(item => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;*/


/*import React from 'react';
import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem'; 


const Home = () => {
  const items = useSelector(store => store.items);
  
  return (
    <main>
      <div className='items-container'>
        {items.map((item, index) => (
          <HomeItem 
            key={index} 
            item={item} 
            imageSrc={`${process.env.PUBLIC_URL}/images/${index + 1}.jpg`} 
          />
        ))}
      </div>
    </main>
  );
};

export default Home;*/


import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;


