import React from 'react'
import styled from 'styled-components';
import Bg from "../../assets/slider-bg-2.png"
import {ReactComponent as BgImg} from "../../assets/slider-bg-2.svg"
const MainSlider2 = () => {
    return (
        <Wrapper>
            <ImageWrap>
                {/* <BgImg/> */}
                <img src={Bg} />
            </ImageWrap>
        </Wrapper>
    )
}

export default MainSlider2

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
    object-fit: contain;
    width: 100%;
    height: 100%;

}
`