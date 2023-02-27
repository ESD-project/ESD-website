import logo from "../images/logo.png"
const Header = () => {
    return ( 
        <div className="w-full flex flex-row justify-between bg-gray-300 relative">
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
                    <li className="text-center  w-16 bg-white rounded-sm text-black px-2 py-0.5">Log In</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;