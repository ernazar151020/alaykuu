import React from 'react'
import styled from 'styled-components';
import Bg from "../../assets/slider-bg-2.png"
import { ReactComponent as BgImg } from "../../assets/slider-bg-2.svg"
import { ReactComponent as ArrowDown } from "../../assets/arrow-navigate-down.svg"
const MainSlider2 = () => {
    return (
        <Wrapper>
            <ImageWrap>
                {/* <BgImg/> */}
                <img src={Bg} />
            </ImageWrap>
            <Content>
                <a href="#products" className='links flex flex-col justify-center items-center cursor-pointer'>
                    <div className='link'>Наша продукция</div>
                    <div className='bounce'><ArrowDown /></div>
                </a>
            </Content>
        </Wrapper>
    )
}

export default MainSlider2

const Wrapper = styled.div`
min-height: 600px;
max-height: 700px;
position: relative;
@media(max-width:768px){
  min-height: 200px;
  padding-bottom:30px;
  padding-top:30px;
}
`
const ImageWrap = styled.div`
inset:0;
width: 100%;
height: 100%;
@media(max-width:768px){
    margin-bottom:40px;
}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height:300px;

}
`

const Content = styled.div`
display:grid;
grid-template-columns:1fr 1.5fr;
align-items: center;
height:100%;
min-height:600px;
@media(max-width:768px){
  display:flex;
  flex-direction: column;
  align-items: center;
  min-height:200px;
}

.links{
  @media(max-width:768px){
order:2;
}
}

.link{
    font-weight: 600;
font-size: 20px;
line-height: 28px;
text-transform: uppercase;
color: #00497A;
margin-bottom:20px;
@media(max-width:768px){
  font-weight: 600;
font-size: 16px;
line-height: 20px;
}
}

.image_wrapper{
    width:700px;
    @media(max-width:768px){
      width:85%;
      order:1;
      margin-bottom:90px;
      padding-top: 40px;
}
    img{
        width:100%;
    }
}

@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
.bounce {
	-moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
	animation: bounce 3s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-15px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

`