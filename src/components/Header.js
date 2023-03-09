import logo from "../images/logo.png"
import { useState } from "react";
import LogIn from "./LogIn";
import Modal from "./Modal";
const Header = () => {
   
    
    return ( 
        <div className="w-full flex flex-row justify-between bg-gray-300 bg-gradient-to-r from-zinc-800 to-zinc-500 th relative">
            <div>
             <img src={logo} className="w-24 mt-2" alt="" />
            </div>
            <div className="flex flex-row space-x-2">
                <ul className="flex flex-row space-x-4 m-auto mr-6 text-sm">
                    <li className="text-center text-black">Home</li>
                    <li className="text-center text-white">How it Works</li>
                    <li className="text-center text-white">Rental Deals</li>
                    <li className="text-center text-white">Why choose us</li>
                    <li className="text-center text-white">Testimonial</li>
                    <li className="text-center text-white">Register</li>
                    <li className="text-center  w-16 bg-white rounded-sm text-black px-2 py-0.5"
                    
                    type="button" data-modal="login"
                     >
                        Log In</li>
                </ul>
                
            </div>
            
         

            
        </div>
     );
}
 
export default Header;