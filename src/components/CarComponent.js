import ToyotaTocoma from "../images/Toyota Tocoma.png";
const CarComponent = () => {
    return ( 
        <div className="w-52 rounded-md pb-6 bg-white h-52  flex flex-col space-y-4">
            <div className="flex flex-row justify-between px-2">
                <div className="text-sm">Toyota Tocoma</div>
                <div>O</div>
            </div>
            <div>
                <img src={ToyotaTocoma} className="w-52 h-32" alt="" />
            </div>
            <div className="flex flex-row justify-between px-2">
                <div className="text-sm">$1200.00/day</div>
                <div className="w-18 p-0.5 px-1  rounded-sm  text-center  bg-black text-white text-xs">Rent Now</div>
            </div>
        </div>
     );
}
 
export default CarComponent;