import logo from "../images/logo.png"
import { useState } from "react";
import LogIn from "./LogIn";
import Modal from "./Modal";
import { Link,Router } from "react-router-dom";
const Header = () => {
   
    
    return ( 
        // <Router>
        <div className="w-full flex flex-row justify-between bg-gray-300 bg-gradient-to-r from-zinc-800 to-zinc-500 th relative">
            <div>
             <img src={logo} className="w-24 mt-2" alt="" />
            </div>
            <div className="flex flex-row space-x-2">
                <ul className="flex flex-row space-x-4 m-auto mr-6 text-sm">
                    <li >
                        <Link to={'/'} className="text-center text-black">Home</Link>
                        </li>
                    <li className="text-center text-white"><Link to={'/how-it-works'} className="text-center text-black">How it works</Link></li>
                    <li className="text-center text-white"><Link to={'/cars'} className="text-center text-black">Rental Deals</Link></li>
                    <li className="text-center text-white"><Link to={'/why-choose-us'} className="text-center text-black">Why Choose Us</Link></li>
                    <li className="text-center text-white"><Link to={'/testimonies'} className="text-center text-black">Testimonials</Link></li>
                    {/* <li className="text-center text-white"><Link to={'/cars'} className="text-center text-black">Rental Deals</Link></li> */}
                    <li className="text-center  w-16 bg-white rounded-sm text-black px-2 py-0.5"
                    
                    type="button" data-modal="login"
                     >
                        Log In</li>
                </ul>
                
            </div>
            
         

            
        </div>
        // </Router>
     );
}
 
export default Header;