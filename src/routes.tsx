
import { 
    BrowserRouter as Router,
    Route,
    Routes,
 } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './components/Layout/Layout'
import Admin from './Pages/Admin/Admin'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/admin' element={<Admin/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
