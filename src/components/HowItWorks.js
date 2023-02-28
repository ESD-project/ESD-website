import BMW from "../images/BMW.png";
import Cadillac from "../images/Cadillac.png";
import Ford from "../images/Ford.png";
import Honda from "../images/Honda.png";
import Jeep from "../images/Jeep.png";
import LandRover from "../images/Land Rover.png";
import Nissan from "../images/Nissan.png";
import Porsche from "../images/Porsche.png";
import Toyota from "../images/Toyota.png";

const HowItWorks = () => {
    return ( 
        <div className="w-full mt-24 flex flex-col space-y-8 pb-8 ">
            <div>
                <ul className="flex flex-row space-x-4 justify-center">
                    <li><img src={BMW} className="mt-4" alt="" /></li>
                    <li><img src={Cadillac} alt="" /></li>
                    <li><img src={Ford} className="mt-8" alt="" /></li>
                    <li><img src={Honda} alt="" /></li>
                    <li><img src={Jeep} alt="" /></li>
                    <li><img src={LandRover} alt="" /></li>
                    <li><img src={Nissan} alt="" /></li>
                    <li><img src={Porsche} alt="" /></li>
                    <li><img src={Toyota} alt="" /></li>
                    
                </ul>
            </div>
            <div className="text-center text-black text-3xl font-medium">
                How it works
            </div>
            <div className="text-center text-black font-light text-sm w-96 m-auto">
                A high-performing wed-based car rental system for any rent-a-car company and website 
            </div>
            <div className="flex flex-row justify-center space-x-48">
                <div className="flex flex-col justify-center space-y-6">
                    <div className="w-12 h-12 m-auto rounded-lg bg-green-200 ">
                        <img src="" alt="" />
                    </div>
                    <div className="text-md font-normal text-center">Choose Location </div>
                    <div className="text-xs font-light text-center w-48">Choose your location and find your best car</div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="w-12 h-12 m-auto rounded-lg bg-green-200 ">
                        <img src="" alt="" />
                    </div>
                    <div className="text-md font-normal text-center">Pick-up Date </div>
                    <div className="text-xs font-light text-center w-48">Select your pick-up date and time to book your car</div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="w-12 h-12 m-auto rounded-lg bg-green-200 ">
                        <img src="" alt="" />
                    </div>
                    <div className="text-md font-normal text-center">Book your car </div>
                    <div className="text-xs font-light text-center w-48">Book your car and we will deliver  to you directly or pick-up personally</div>
                </div>
            </div>
        </div>
     );
}
 
export default HowItWorks;