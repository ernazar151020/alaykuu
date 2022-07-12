import React from 'react'
import styled from 'styled-components';
import  Bg  from "../../assets/slider-bg-1.png"
import { ReactComponent as ArrowDown } from "../../assets/arrow-navigate-down.svg"
import Waves from "../../assets/main-slider-waves.png"
const MainSlider1 = () => {
    return (
        <Wrapper>
            <WavesBg>
                <img src={Waves}/>
            </WavesBg>
            <Title>
                <div>
                    Наследие предков
                    с вершин гор Алайку!
                </div>
            </Title>
            <Content>
                <a href="#products" className='flex flex-col justify-center items-center cursor-pointer'>
                    <div className='link'>Наша продукция</div>
                    <div className='bounce'><ArrowDown /></div>
                </a>
                <div className='image_wrapper '>
                    <img src={Bg}/>
                </div>
            </Content>
        </Wrapper>
    )
}

export default MainSlider1

const Wrapper = styled.div`
/* padding:100px 0;   */
position:relative;  
display: block;
width: 100%;

min-height: 600px;
max-height: 700px;
padding-bottom:100px;
`

const Title = styled.div`
margin-top:40px;
background: #0175E0;
border-radius: 0px 80px 80px 0px;
padding:34px;
padding-left:180px;
display:inline-block;
position: absolute;;
left:0;
/* top:0px; */
div{
    color: #fff;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    width: 550px;
}
`

const Content = styled.div`
display:grid;
grid-template-columns:1fr 1.5fr;
align-items: center;
height:100%;
min-height:600px;

.link{
    font-weight: 600;
font-size: 20px;
line-height: 28px;
text-transform: uppercase;
color: #00497A;
margin-bottom:20px;
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

.image_wrapper{
    width:700px;
    img{
        width:100%;
    }
}

`

const WavesBg= styled.div`
position: absolute;
bottom:-32%;
`