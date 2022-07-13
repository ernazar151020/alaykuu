import React from 'react'
import styled from 'styled-components';
import { milkData } from './../../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
// import LeftArrow from "../../../assets/slide-arrow-left.png"
// import RightArrow from "../../../assets/slide-arrow-right.png"
import   LeftArrow from "../../../assets/arrow-sm-right.png"
import  RightArrow from "../../../assets/arrow-sm-left.png"

console.log("milkData" , milkData)

const MilkProducts = () => {
    return (
        <Wrapper id="products">
            <h1>Молочная
                продукция</h1>
            <p>Без крахмала и ЗМЖ.  Только натуральное. Можете проверить!</p>
            <Swiper
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {
          milkData.map((item, index) => {
            return <SwiperSlide key={index}>
              <Item >
                {item.image}
                {/* <img src={item.image} /> */}
              </Item>
            </SwiperSlide>
          })
        }

      </Swiper>
        </Wrapper>
    )
}

export default MilkProducts

const Wrapper = styled.div`
background: linear-gradient(178.82deg, #A2C8F1 53.02%, #DDEDFC 98.96%);
padding:40px 0 0px 0px;
display:none;
@media(max-width: 768px){
display:block;
}
h1{
    font-weight: 700;
font-size: 28px;
line-height: 32px;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
margin-bottom:20px;
}
p{
    font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #231F20;
margin-bottom:45px;
}

/* swiper css */
.swiper-slide.swiper-slide-active{
    transform:scale(1.2)
  }
  .swiper.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.mySwiper{
padding:30px 0;
position:relative;
  }
  .swiper-button-prev{
    background-color: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 52.5%);
    background-image: url(${LeftArrow});
    z-index:9999;
    position:absolute;
    width: 40px;
    height:40px;
    left: 50px;
    bottom: 0px;
 background-repeat: no-repeat;
 background-size: 100% auto;
 background-position: center;
 transform: translateY(130px);
    :after{
      display:none;
    }
  }
  .swiper-button-next{
    background-image: url(${RightArrow});
 
    z-index:9999;
    position:absolute;
    width: 40px;
    height:40px;
    right: 50px;
    bottom: 0px;
 background-repeat: no-repeat;
 background-size: 100% auto;
 background-position: center;
 transform: translateY(130px);
    :after{
      display:none;
    }
  }

.mySwiper{
  position:relative;
z-index:1000;

}
.swiper {
  width: 100%;
  height: 100%;
  padding:40px 0;
  min-height:450px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  filter: drop-shadow(0px 8px 40px rgba(0, 0, 0, 0.04));
  border-radius: 30px;
  background-color: #fff;
  padding:10px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


`

const Item = styled.div`
width:250px;
height:200px;
display:flex;
align-items: center;
justify-content: center;
filter: drop-shadow(0px 8px 40px rgba(0, 0, 0, 0.04));
border-radius: 30px;

`