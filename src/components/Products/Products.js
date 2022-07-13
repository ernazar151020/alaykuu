import React, { useState } from 'react'
import styled from 'styled-components';
import FilterButtons from './FilterButtons';
import Slider from './../Slider/Slider';
import { milkData } from '../../data/data';
import { nationalDrinks } from '../../data/data';
import { coldDrinks } from '../../data/data';

const Products = () => {

  const [activeBtn, setActiveBtn] = useState({
    milk: true,
    national: false,
    cold: false,
  })
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(178.82deg, #A2C8F1 0.96%, #DDEDFC 98.96%)")
  const [products,setProducts] = useState(milkData)

  const blue = "linear-gradient(178.82deg, #A2C8F1 0.96%, #DDEDFC 98.96%)"
  const purple = "linear-gradient(178.82deg, #F7E1E1 0.96%, #FFF1DB 98.96%)"
  const green = "linear-gradient(178.82deg, #C4EEBD 0.96%, #F2E9CA 98.96%)"


  const handleSwitchActiveBtn = (value) => {
    if (value === "milk") {
      setProducts(milkData)
      setBackgroundColor(blue)
      setActiveBtn({
        milk: true,
        national: false,
        cold: false,
      })
    }
    else if (value === "national") {
      setProducts(nationalDrinks)
      setBackgroundColor(purple)
      setActiveBtn({
        milk: false,
        national: true,
        cold: false,
      })
    }
    else if (value === "cold") {
      setProducts(coldDrinks)
      setBackgroundColor(green)
      setActiveBtn({
        milk: false,
        national: false,
        cold: true,
      })
    }
  }

  const renderText = () => {
    if (activeBtn.milk) {
      return <div>
        <h1>Молочная продукция</h1>
        <p>Без крахмала и ЗМЖ.  Только натуральное. Можете проверить!</p>
      </div>
    }
    else if (activeBtn.national) {
      return <div>
        <h1>Национальные напитки</h1>
        <p>Уникальность и натуральность - наши главные ценности!</p>
      </div>
    }
    else if (activeBtn.cold) {
      return <div>
        <h1>Прохладительные напитки</h1>
        <p>Дары природы в наших напитках без добавлений сахара!</p>
      </div>
    }
  }


  return (
    <Wrapper style={{ background: backgroundColor }} id="products">
      <FilterButtons activeBtn={activeBtn} handleClick={handleSwitchActiveBtn} />
      <TextContent>
        {renderText()}
      </TextContent>
      <Slider products={products}/>
    </Wrapper>
  )
}

export default Products

const Wrapper = styled.div`
padding: 60px 0 120px;
@media(max-width: 768px){
  display:none;
}
`

const TextContent = styled.div`
text-align: center;
margin-top:100px;
margin-bottom:60px;
h1{
  font-weight: 700;
font-size: 70px;
line-height: 70px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
margin-bottom:10px;
@media(max-width: 768px) {
  font-size: 28px;
line-height: 32px;
width:170px;
margin:0 auto;
margin-bottom:20px;
}
}
p{
  font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #231F20;
@media(max-width: 768px) {
  font-weight: 400;
font-size: 14px;
line-height: 18px;
padding:0 15px;
}

}
`