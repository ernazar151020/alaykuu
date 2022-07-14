import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import LeftArrow from "../../assets/slide-arrow-left.png"
import RightArrow from "../../assets/slide-arrow-right.png"

const Slider = ({ products }) => {


  return (
    <Wrapper>
      <Swiper
        slidesPerView={6}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {
          products.map((item, index) => {
            return <SwiperSlide key={index}>
              <Item >
                {/* {item.image} */}
                <img src={item.image} />
              </Item>
            </SwiperSlide>
          })
        }

      </Swiper>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
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
    width: 85px;
    height:180px;
    left: 0px;
    top: 70px;
 background-repeat: no-repeat;
 background-size: 100% auto;
 background-position: center;
    :after{
      display:none;
    }
  }
  .swiper-button-next{
    background-image: url(${RightArrow});
 
    z-index:9999;
    position:absolute;
    width: 75px;
    height:180px;
    right: 0px;
    top: 70px;
 background-repeat: no-repeat;
 background-size: 100% auto;
 background-position: center;
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
  /* height: 100%; */
  /* height: 100px; */
  object-fit: contain;
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
img{
  width:100%;
  height:160px;
}

`