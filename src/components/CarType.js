import suv from "../images/suv.png";
const CarType = () => {
    return ( 
        <div className="w-64  h-32 flex flex-col px-2 rounded-md border border-gray-400">
            <div><img src={suv} className="-pb-4" alt="" /></div>
            <div className="text-center text-lg font-medium -pt-4">suv</div>
            
        </div>
     );
}
 
export default CarType;