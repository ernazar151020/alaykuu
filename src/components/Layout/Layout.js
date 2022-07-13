import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SideBar from './../SideBar/SideBar';

const Layout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleBurger = ()=>{
        setShowSidebar(!showSidebar)
    }


    return (
        // className='2xl:container 2xl:mx-auto'
        <div >
              
                 <Navbar handleBurger={handleBurger} showSidebar={showSidebar}/>
            
            
            
            {
                showSidebar && <SideBar  handleBurger={handleBurger}/>
            }
            

            {children}
            <Footer/>
        </div>
    )
}

export default Layout