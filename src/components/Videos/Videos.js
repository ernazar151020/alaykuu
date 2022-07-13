import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import LeftArrow from "../../assets/arrow-sm-right.png"
import RightArrow from "../../assets/arrow-sm-left.png"


const videos = [
    {
        link: "https://pbs.twimg.com/media/Dce-Ul4XcAANtoO.jpg",
    },
    {
        link: "https://pbs.twimg.com/media/Dce-Ul4XcAANtoO.jpg",
    },
    {
        link: "https://pbs.twimg.com/media/Dce-Ul4XcAANtoO.jpg",
    },
    {
        link: "https://pbs.twimg.com/media/Dce-Ul4XcAANtoO.jpg",
    },
    {
        link: "https://pbs.twimg.com/media/Dce-Ul4XcAANtoO.jpg",
    },
]


const Videos = () => {

    return (
        <VideoContent>
            <h1>Видео о нас</h1>
            <VideoItems>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
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
                        videos.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <div className="video mx-3" key={index}>
                                    <img src={item.link} />
                                </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>

            </VideoItems>
        </VideoContent>
    )
}

export default Videos

const VideoContent = styled.div`
margin-left:144px;
margin-bottom:100px;
@media(max-width: 768px){
    margin-left:0;
}
h1{
    font-weight: 600;
font-size: 24px;
line-height: 28px;
color: #000000;
margin-bottom:30px;
}


/* swiper */

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
    width: 50px;
    height:50px;
    left: 0px;
    top: 90px;
 background-repeat: no-repeat;
 background-size: 100% auto;
 background-position: center;
 display:none;
 @media(max-width: 768px){
    display:block;
 }
    :after{
      display:none;
    }
  }
  .swiper-button-next{
    background-image: url(${RightArrow});
    display:none;
    z-index:9999;
    position:absolute;
    width: 50px;
    height:50px;
    right: 0px;
    top: 90px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
 @media(max-width: 768px){
    display:block;
 }
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
  /* min-height:400px; */
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
  height:130px;
  width:230px;
}

`

const VideoItems = styled.div`
display:flex;
.video{

}
img{
height:250px;
width:230px;
/* width:235px; */
}
`