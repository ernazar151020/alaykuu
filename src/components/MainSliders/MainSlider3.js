import React from 'react'
import styled from 'styled-components';
import Bg from "../../assets/slider-bg-3.png"
import {ReactComponent as BgImg} from "../../assets/slider-bg-2.svg"
const MainSlider3 = () => {
    return (
        <Wrapper>
            <ImageWrap>
                {/* <BgImg/> */}
                <img src={Bg} />
            </ImageWrap>
        </Wrapper>
    )
}

export default MainSlider3

const Wrapper = styled.div`
min-height: 600px;
max-height: 700px;
position: relative;
`
const ImageWrap = styled.div`
/* position: absolute; */
inset:0;
width: 100%;
height: auto;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;

}
`