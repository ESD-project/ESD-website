import Cars from "../images/clusterofcars.png";
const WhyChooseUs = () => {
    return ( 
        <div className="flex flex-col space-y-4 p-8 bg-white">
            <div className="text-3xl font-medium text-center">Why Choose Us</div>
            <div className="text-sm font-light text-center m-auto w-72">We provide the best Car rental services in Ghana</div>
            <div className="flex flex-row justify-center space-x-48">
                <div>
                    <img src={Cars} className="w-96 h-84" alt="" />
                </div>
                <div className="flex flex-col space-y-8 mt-16 ">
                        <div className="flex flex-row space-x-4">
                            <div className="rounded h-12 w-12 bg-green-500"></div>
                            <div className="flex flex-col space-y-1">
                                <div className="text-sm font-medium">Customer Support</div>
                                <div className="text-xs font-light">We are ready to help you find your dream car for your holiday in the city</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <div className="rounded h-12 w-12 bg-green-500"></div>
                            <div className="flex flex-col space-y-1">
                                <div className="text-sm font-medium">Customer Support</div>
                                <div className="text-xs font-light">We are ready to help you find your dream car for your holiday in the city</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <div className="rounded h-12 w-12 bg-green-500"></div>
                            <div className="flex flex-col space-y-1">
                                <div className="text-sm font-medium">Customer Support</div>
                                <div className="text-xs font-light">We are ready to help you find your dream car for your holiday in the city</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default WhyChooseUs;