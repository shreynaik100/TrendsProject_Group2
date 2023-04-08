import {BrowserRouter as Router, Link } from 'react-router-dom'
import Header from './components/Header'
import PageRoutes from './PageRoutes'

export default function Page(){
    return (
        <Router>
            <div>
                <header>
                    <Header />
                </header>
                
                <PageRoutes />
            </div>
        </Router>
    )
}