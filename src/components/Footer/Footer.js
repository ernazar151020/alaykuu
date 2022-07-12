import React from 'react'
import styled from 'styled-components';
import FooterContactForm from './FooterContactForm';
import FooterInfo from './FooterInfo';

const Footer = () => {
    return (
        <FooterWrapper className='lg:px-36'>
            <div className='lg:grid lg:grid-cols-2 items-center'>
                <FooterInfo />
                <FooterContactForm />

            </div>

        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
background: #055185;
padding-bottom:33px;
padding-top:43px;
`

