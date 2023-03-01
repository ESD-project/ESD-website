const TestimonyCard = () => {
    return ( 
        <div className="bg-gray-300 rounded-md w-96 h-52 p-4 flex flex-col">
            <div className="flex flex-row justify-evenly">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="text-black font-medium text-sm ">DenJy</div>
                    <div className="text-xs text-bg-200">Haatso, Accra</div>
                </div>
                <div className="text-black text-sm ">4.5</div>
            </div>

            <div className="w-84">
            "I had an excellent experience renting a car through this website.  The car was in great condition and the customer service was top-notch. I would definitely rent from this ESD again."
            </div>

        </div>
     );
}
 
export default TestimonyCard;