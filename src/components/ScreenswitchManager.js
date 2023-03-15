import { Route, Router, Routes,BrowserRouter } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import HowItWorks from './HowItWorks';
import Cars from './Cars';
import WhyChooseUs from './WhyChooseUs';
import Testimonies from './Testimonies';
import ExploreCars from './ExploreCars';
const ScreenSwitchManager = () => {
    return ( 
        // <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<HomeScreen/>}/>
            <Route index element={<HomeScreen/>}/>  
            
            <Route path='/how-it-works' element={<HowItWorks/>}/>
             
            <Route path='/cars' element={<Cars/>}/>
              
            <Route path='/why-choose-us' element={<WhyChooseUs/>}/>
              
            <Route path='/testimonies' element={<Testimonies/>}/>
            {/* <Route path='/explore' element={<ExploreCars/>}/> */}
            
            <Route path='/explore' element={<ExploreCars/>}/>
                
            
            </Routes>
        // </BrowserRouter>
     );
}
 
export default ScreenSwitchManager;