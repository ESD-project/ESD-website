import Image from "../images/background.png";
const HomeScreen = () => {
    return ( 
        <div className="w-full  h-full">
            <img src={Image} className="w-full h-full" alt="" />
            {/* <div className="absolute">
                <div className="text-white">Kofi</div>
            </div> */}
        </div>
     );
}
 
export default HomeScreen;