const Filter = () => {
    return ( 
        <div className="flex flex-col border border-gray-300 rounded-sm py-4  w-52  ">
            <div className="font-medium text-md text-center py-4">Filter</div>
            <section className="border border-gray-300"></section>

            <div className="flex flex-col p-6  space-y-4">
                <div className="flex flex-row space-x-2">
                    <div className="w-4 h-4 rounded-sm border border-gray-400"></div>
                    <div className="text -mt-1 text-sm text-gray-400">Any</div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="w-4 h-4 rounded-sm border border-gray-400"></div>
                    <div className="text text-sm text-gray-400">With Driver</div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="w-4 h-4 rounded-sm border border-gray-400"></div>
                    <div className="text text-sm text-gray-400">Without Driver</div>
                </div>
            </div>
            <div className="font-medium text-sm text-center py-4">Sort by Ratings</div>

        </div>
     );
}
 
export default Filter;