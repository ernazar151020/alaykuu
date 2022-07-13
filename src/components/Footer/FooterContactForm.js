import React from 'react'
import styled from 'styled-components';

const FooterContactForm = () => {
    return (
        <FormWrapper>
            <form className='py-7 px-5 text-center'>
                <p className="text">Оставьте свои контактные данные и мы свяжемся с вами </p>
                <div className='mb-5 text-center'>
                    <input placeholder='Ваше ФИО' />
                </div>
                <div className='mb-5 text-center'>
                    <input placeholder='Ваш e-mail' />
                </div>
                <div className='mb-5 text-center'>
                    <input placeholder='Номер телефона' />
                </div>
                <BtnWrap>Отправить</BtnWrap>
            </form>
        </FormWrapper>
    )
}

export default FooterContactForm

const FormWrapper = styled.div`
margin:0 auto;
@media(max-width:768px){
    order:1;
}
form{
    background: #FFFFFF;
border-radius: 30px;
max-width:400px;
@media(max-width:768px){
    max-width:350px; 
    margin-bottom:40px;
}
}
.text{
    font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;
margin-bottom:20px;

}
input{
    background: #F2F2F2;
border-radius: 10px;
padding:10px 15px;

}
`

const BtnWrap = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
background: #00497A;
border-radius: 30px;
display: inline-block;
padding:10px 20px;
margin:0 auto;
cursor:pointer;
`