import {Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Book from './components/Book';
import Package from './components/Package';
import Service from './components/Service';


const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<Home />} />    
            <Route path='/about' element= {<AboutUs />} />  
            <Route path='/book' element= {<Book />} />   
            <Route path='/package' element= {<Package />} />     
            <Route path='/service' element= {<Service />} />     
            <Route path='/*' element={<NotFound/>} />     
        </Routes>
        
    )
}