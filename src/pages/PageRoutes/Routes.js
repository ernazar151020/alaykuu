import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutCompany from '../AboutCompany/AboutCompany'
import Home from '../Home/Home'
import Vacancies from './../Vacancies/Vacancies';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about-company" element={<AboutCompany />}></Route>
                <Route path="/vacancies" element={<Vacancies />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes