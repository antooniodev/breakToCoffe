
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
 } from 'react-router-dom'
import Home from './Pages/Home/Home'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes
