import React from 'react'
import Layout from '../../components/Layout/Layout'
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import Products from '../../components/Products/Products';
import ProductsMobileVersion from '../../components/Products/ProductsMobileVersion/Products';
import MainSlider from '../../components/MainSlider/MainSlider';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {

    return (
        <Layout>
            <MainSlider/>
            <Products/>
            <ProductsMobileVersion/>
            <AboutCompany />
        </Layout>
    )
}

export default Home