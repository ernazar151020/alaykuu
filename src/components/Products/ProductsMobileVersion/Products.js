import React from 'react'
import MainSlider from '../../MainSlider/MainSlider'
import MilkProducts from './MilkProducts';
import ColdDrinks from './ColdDrinks';
import NationalProducts from './NationalProducts';

const Products = () => {
  return (
    <div>
        <MilkProducts/>
        <NationalProducts/>
        <ColdDrinks/>
    </div>
  )
}

export default Products