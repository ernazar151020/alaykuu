import React from 'react'
import styled from 'styled-components';
import MainSlider1 from '../MainSliders/MainSlider1';
import MainSlider2 from '../MainSliders/MainSlider2';
import MainSlider3 from './../MainSliders/MainSlider3';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import LeftArrow from "../../assets/slide-arrow-left.png"
import RightArrow from "../../assets/slide-arrow-right.png"

const MainSlider = () => {
    return (
        <Wrapper>
            <Swiper
                slidesPerView={1}
                // spaceBetween={40}
                // centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     768: {
                //         slidesPerView: 4,
                //         spaceBetween: 40,
                //     },
                //     1024: {
                //         slidesPerView: 6,
                //         spaceBetween: 40,
                //     },
                // }}
                modules={[Navigation]}
                className="mySwiper"
                navigation={true}
            >
                <SwiperSlide >
                    <MainSlider1 />
                </SwiperSlide>
                <SwiperSlide >
                    <MainSlider2 />
                </SwiperSlide>
                <SwiperSlide >
                    <MainSlider3 />
                </SwiperSlide>

                {/* {
          products.map((item, index) => {
            return <SwiperSlide key={index}>
              <Item >
                {item.image}
                <img src={item.image} />
              </Item>
            </SwiperSlide>
          })
        } */}

            </Swiper>
        </Wrapper>
    )
}

export default MainSlider

const Wrapper = styled.div`
padding-top:26px;
/* min-height:600px; */
.swiper-slide.swiper-slide-active{
    transform:scale(1.2)
  }
  .swiper.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.mySwiper{
padding:30px 0;
position:relative;
  }
  .swiper-button-prev{
    background-color: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 52.5%);
    /* background-color: white;
    padding:0 40px 0 0;
    border-radius: 0 30px  30px 0; */
    background-image: url(${LeftArrow});
    z-index:9999;
    position:absolute;
    width: 85px;
    height:180px;
    left: 0px;
    top: 35%;
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
    top: 35%;
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

  /* Center slide text vertically */
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