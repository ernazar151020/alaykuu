import React from 'react'
import styled from 'styled-components';
import FooterContactForm from './FooterContactForm';
import FooterInfo from './FooterInfo';

const Footer = () => {
    return (<>
        <FooterWrapper className='lg:px-36'>
            <div className='flex flex-col sm:flex sm:flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 items-center'>
                <FooterInfo />
                <FooterContactForm />

            </div>
        </FooterWrapper>
            <FooterBottom>© 2014 АО «ОсОО «АЛАЙКУ Органикс»</FooterBottom>
    </>
    )
}

export default Footer

const FooterWrapper = styled.div`
background: #055185;
padding-bottom:33px;
padding-top:43px;
`

const FooterBottom = styled.div`
background: #00497A;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
padding:22px 0;
text-align: center;
`

