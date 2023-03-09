import logo from "../images/logo.png";
import Modal from "./Modal";
import { useState } from "react";
const LogIn = ({ closeFn = () => null, open = false }) => {
    
    
    return ( 
        <Modal open={open}>
        <div  className=" fixed top-64 left-0 right-0   z-10 bg-white   h-96    w-96 m-auto  border-2 rounded-md flex flex-row   border-green-500">
            {/* <div className="w-60% px-32 bg-green-500 ">
              <div ><img src={logo} alt="" className="mt-52" /></div>
            </div> */}
            <div className="w-40% bg-white flex flex-col m-auto space-y-12 ">
                <div className="text-center">Welcome</div>
                <div>
                    <form action="">
                        <div className="mb-4">
                            <input type="email" placeholder="Email" className="outline-0 border p-1 rounded-md w-64" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="outline-0 border p-1 rounded-md w-64" />
                        </div>
                        <div>
                        <label htmlFor="ForgotPassword" className="text-xs text-blue-500 py-2 float-right">Forgot Password?</label>
                        </div>
                        <div>
                            <button className="text-white bg-blue-700 text-xs rounded-lg w-full p-1 ">Log In</button>
                        </div>
                        
                    </form>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="text-center text-xs text-gray-400">
                        Have no account yet?
                    </div>
                    <div>
                    <button className="text-blue-700 bg-white border border-blue-700 text-xs rounded-lg p-1 w-full " type="button" data-modal="register" >Register</button>
                    </div>
                </div>
            </div>

        </div>
        </Modal>

     );
}
 
export default LogIn;