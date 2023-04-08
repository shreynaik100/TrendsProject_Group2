import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';



const NotFound = () => <h2>This Path is not available</h2>

export default function PageRoutes(){
    return (
        <Routes>
            <Route path='/' element= {<Home />} />    
            <Route path='/*' element={<NotFound/>} />     
        </Routes>
        
    )
}