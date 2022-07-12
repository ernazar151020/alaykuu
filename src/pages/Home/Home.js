import React from 'react'
import Layout from '../../components/Layout/Layout'
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import Products from '../../components/Products/Products';
import MainSlider from '../../components/MainSlider/MainSlider';

const Home = () => {
    return (
        <Layout>
            <MainSlider/>
            <Products/>
            <AboutCompany />
        </Layout>
    )
}

export default Home