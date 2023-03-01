import blackcar from "../images/blacksaloncar.png";
import bluecar from "../images/bluesaloncar.png";
const CarGallery = () => {
    return ( 
        <div className="flex flex-row space-x-6 p-12 bg-gray-100">
            <div>
                <img src={blackcar} className="rounded-lg" alt="" />
            </div>
            <div>
                <img src={bluecar} className="rounded-lg" alt="" />
            </div>

        </div>
     );
}
 
export default CarGallery;