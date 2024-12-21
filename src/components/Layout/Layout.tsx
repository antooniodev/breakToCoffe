import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { Container } from "./styles"

const Layout = () => {
    
    return ( 
    <Container>
        <Header/>
        <Outlet/>
        <Footer />
    </Container>
  )
}

export default Layout

