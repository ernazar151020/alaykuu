import React from 'react'
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg"
import AboutCompanyImg from "../../assets/about-company-bg.svg"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Videos from '../Videos/Videos';


const AboutCompany = () => {
    return (<>
        <Wrapper className="px-4 py-10 lg:px-36 lg:py-10">
            <div className="flex flex-col lg:grid lg:items-start lg:grid-cols-2 ">
                <Info >
                    <Title className='mb-8'>О компании</Title>
                    <p>Наша компания была основана в 2014 году и с тех пор с любовью производим  традиционные национальные напитки из натурального молока, собираемые на юге страны. Придерживаясь миссии, что у нас все должно быть натуральным и вкусным, производим уникальную продукцию</p>
                    <Link to="/about-company">
                        <div className='flex items-center cursor-pointer' >
                            <button>подробнее</button>
                            <RightArrow />
                        </div>
                    </Link>
                </Info>
                <Image>
                    <img src={AboutCompanyImg} />
                    {/* <AboutCompanyImage /> */}
                </Image>
            </div>
        </Wrapper>
        <Videos />
    </>
    )
}

export default AboutCompany

const Wrapper = styled.div``

const Title = styled.div`
    font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #000000;
`

const Info = styled.div`
margin-right:70px;
button{
    font-weight: 600;
font-size: 16px;
line-height: 28px;
text-transform: uppercase;
color: #00497A;
margin-right:20px;
}

@media(max-width:767px){
    margin-right:16px;
    order:2;
}

p{
    margin-bottom:30px;
    width:100%;
    display:block;
}
`

const Image = styled.div`
margin-bottom:50px;
img{
    /* min-width:800px; */
}
`

