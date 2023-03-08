import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import BookingComponent from "./components/BookingComponent";
import HowItWorks from "./components/HowItWorks";
import Cars from "./components/Cars";
import WhyChooseUs from "./components/WhyChooseUs";
import CarGallery from "./components/CarGallery";
import Testimonies from "./components/Testimonies";
import LogIn from "./components/LogIn";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <div
    
     >
    
     <Header/>
     <HomeScreen/>
     <BookingComponent/>
     <HowItWorks/>
     <Cars/>
     <WhyChooseUs/>
     <CarGallery/>
     <Testimonies/>
     {/* <LogIn/> */}
    <BookingPage/>
     <Footer/>
    
    </div>
  );
}

export default App;
