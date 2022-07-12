import React from 'react'
import Layout from '../../components/Layout/Layout'
import styled from 'styled-components';
import AboutCompanyImg from "../../assets/about-company-bg.svg"
const AboutCompany = () => {
    return (
        <Layout>
            <div className=" px-4 pt-6 pb-6 md:px-4 lg:pt-10 lg:px-36 block w-full ">
                <Title className='mb-8'>О компании</Title>
                <div className="flex flex-col lg:grid lg:items-start lg:grid-cols-2 ">
                    <Info >
                        <p>Наша компания была основана в 2014 году и с тех пор с любовью производим  традиционные национальные напитки из натурального молока, собираемые на юге страны.</p>
                        <p>Сегодня можем с гордостью предложить Вам серию продуктов как жидкий "Курут", "Чалап Бышма", "Жарма", а также "Кымыз" из джайлоо Алайку.</p>
                        <p>Наряду с этим, производим прохладительные напитки "Шербет", делая доступным прекрасный вкус натуральных ягод и фруктов  круглый год.</p>
                        <p>Придерживаясь миссии, что у нас все должно быть натуральным и вкусным, производим уникальное сливочное масло с 82,5% жирности, согласно европейским стандартам качества, а также вкуснейший традиционный "каймак" (50% жирности), сливки, йогурты и сыры.</p>
                        <p>Помимо кисло-молочных и прохладительных напитков, мы производим для Вас авторское пиво с 1995 года под торговой маркой "Академия Пива".</p>
                    </Info>
                    <Image>
                        <img src={AboutCompanyImg} />
                        {/* <AboutCompanyImage /> */}
                    </Image>
                </div>
            </div>

        </Layout>
    )
}

export default AboutCompany

const Info = styled.div`
margin-right:70px;

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
const Title = styled.div`
    font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #000000;
`