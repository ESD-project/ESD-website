import CarComponent from "./CarComponent";
const Cars = () => {
    return ( 
        <div className="flex flex-col space-y-4 p-8 bg-gray-100">
            <div className="text-3xl font-medium text-center">Most popular car rental deals</div>
            <div className="text-sm font-light text-center m-auto w-72">A highperforming web-based car rental syatem for any rent-a-car company and website</div>
            <div className="">
                <ul className="flex flex-row space-x-48 justify-center">
                    <div><li className="text-sm text-black">Popular</li>
                    {/* <section className="bg-gray-400 border mt-2 w-32"></section> */}
                    </div>
                    <div>
                    <li className="text-sm text-gray-400">Large Car</li>
                    {/* <section className="bg-gray-400 border mt-2 w-32"></section> */}
                    </div>
                   
                    <li  className="text-sm text-gray-400">Small Car</li>
                    <li  className="text-sm text-gray-400">Exclusive Car</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-16 justify-center pb-12">
                <div className="flex flex-row space-x-16 justify-center">
                    <CarComponent/>
                    <CarComponent/>
                    <CarComponent/>
                    <CarComponent/>
                </div>
                <div className="flex flex-row space-x-16 justify-center">
                    <CarComponent/>
                    <CarComponent/>
                    <CarComponent/>
                    <CarComponent/>
                </div>
            </div>

            
            <div className="w-18 m-auto font-medium p-0.5 px-1 py-1  rounded-sm  text-center  bg-white text-black text-xs">Show more cars</div>
           
        </div>
     );
}
 
export default Cars;