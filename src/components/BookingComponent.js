const BookingComponent = () => {
    return ( 
        <div className="w-11/12 mx-12 px-8 py-8 flex flex-row  space-x-12 bg-green-500 rounded-md text-black h-36 -mt-12 absolute">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2">
                <div className="w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
                <div>Pick- Up</div>
                </div>
                <div className="flex flex-row space-x-6">
                    <div>
                        <div className="font-medium ">Locations</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your city</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                    <section className="border border-gray-500"></section>
                    <div>
                        <div className="font-medium ">Date</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your date</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                    <section className="border border-gray-500"></section>
                    <div>
                        <div className="font-medium ">Time</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your time</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                </div>
                
            </div>
            <section className="border border-black"></section>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2">
                <div className="w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
                <div>Drop-Off</div>
                </div>
                <div className="flex flex-row space-x-6">
                    <div>
                        <div className="font-medium ">Locations</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your city</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                    <section className="border border-gray-500"></section>
                    <div>
                        <div className="font-medium ">Date</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your date</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                    <section className="border border-gray-500"></section>
                    <div>
                        <div className="font-medium ">Time</div>
                        <div className="flex flex-row space-x-2">
                            <div>select your time</div>
                        <select name="select your city" className="bg-green-500" placeholder="select your city" id="">
                            <option value="select your city"></option>
                        </select>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className=" h-8 m-auto pt-1 bg-black rounded-sm text-white w-28 text-center float-left">Search</div>
        </div>
     );
}
 
export default BookingComponent;