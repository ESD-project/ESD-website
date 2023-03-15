import CarTypes from "./CarTypes";
import BookingComponent from "./BookingComponent";
import CarComponent from "./CarComponent";
import Cars from "./Cars";
import Filter from "./Filter";
const ExploreCars = () => {
    return ( 
        <div className="flex flex-col  ">
            <div className="text-2xl font-bold p-6">Explore Cars</div>
            <div className="text-xl font-medium px-6">Browse by car type</div>
            <CarTypes/>
            <div className="mt-24 mb-24">
            <BookingComponent/>
            </div>

            <div className="flex flex-row space-x-8">
                <Filter/>
                <Cars/>
            </div>
            
        </div>
     );
}
 
export default ExploreCars;