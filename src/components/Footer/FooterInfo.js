import React from 'react'
import { ReactComponent as MobilePhone } from "../../assets/contacts/mobile-phone.svg"
import { ReactComponent as Location } from "../../assets/contacts/location.svg"
import { ReactComponent as Phone } from "../../assets/phone.svg"
import { ReactComponent as Email } from "../../assets/contacts/email.svg"
import { ReactComponent as Instagram } from "../../assets/social-icons/instagram.svg"
import { ReactComponent as Facebook } from "../../assets/social-icons/facebook.svg"
import styled from "styled-components"

const FooterInfo = () => {
  return (
    <Info>
        <h1 className='mb-10'>Контакты</h1>
        <div className='text'>Оставайтесь с нами на связи</div>
        <Contacts>
            <div className='flex items-center mb-5'>
                <MobilePhone />
                <a className="ml-2" href="tel:0220505001">0(220) 50 50 01</a>
            </div>
            <div className='flex items-center mb-5'>
                <Location />
                <a className="ml-2" href="tel:0220505001">г. Ош, ул. Джамбула 7</a>
            </div>
            <div className='flex items-center mb-5'>
                <Phone />
                <a className="ml-2" href="tel:0312252233">0(312) 25 22 33</a>
            </div>
            <div className='flex items-center mb-5'>
                <Email />
                <a className="ml-2" href="tel:0312252233">office.alaiku@gmail.com</a>
            </div>
        </Contacts>
        <div className='text mt-7'>Следите за нами в соцсетях:</div>
        <SocialLinks>
            <div className='flex items-center mb-5'>
                <Instagram />
                <a className="ml-2" href="tel:0312252233">alaiku.kg</a>
            </div>
            <div className='flex items-center mb-5'>
                <Facebook />
                <a className="ml-2" href="tel:0312252233">alaiku.kg</a>
            </div>
        </SocialLinks>
    </Info>
  )
}

export default FooterInfo

const Info = styled.div`
h1{
    font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #FFFFFF;
}
.text{
    font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
margin-bottom:20px;
}
`

const Contacts = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
a{
    font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #F2F2F2;
}
`

const SocialLinks = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
a{
    font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #F2F2F2;
}
`