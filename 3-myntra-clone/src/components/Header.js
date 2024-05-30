import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Header = () => {

 const bag = useSelector(store => store.bag);
 


  return(
    <>
    <header>
        <div className="logo_container">
            <Link to ="/">
                <img className="myntra_home" src={process.env.PUBLIC_URL + '/images/myntra_logo.webp'} alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
            <Link href="#">Men</Link>
            <Link href="#">Women</Link >
            <Link href="#">Kids</Link>
            <Link href="#">Home & Living</Link>
            <Link href="#">Beauty</Link>
            <Link href="#">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">Search</span>
           <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoMdPerson />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
              <FaHeart />  
                <span className="action_name">Wishlist</span>
            </div>

            < Link className="action_container" to ="/bag">
            <IoBag />
                
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
    </>
  );
}

export default Header;



/*import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bag">Bag</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;*/