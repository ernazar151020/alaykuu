import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as Russian } from "../../assets/russian.svg"
import { ReactComponent as Phone } from "../../assets/phone.svg"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <NavbarWrap>
            <Link to="/">
                <LogoComponent>
                    <Logo />
                </LogoComponent>
            </Link>
            <NavItems>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <a>Наша продукция</a>
                </li>
                <li className='about_company_btn relative'>
                    <div className='flex items-center'>
                        <a>О компании</a>
                        <span><ArrowDown /></span>
                    </div>
                    <ItemLinks>
                        <li>
                            <Link to="/about-company">О компании</Link>
                        </li>
                        <li>
                            <Link to="/vacancies">Вакансии</Link>
                        </li>
                    </ItemLinks>
                </li>
                <li>
                    <a>Блог</a>
                </li>
                <li>
                    <a>Контакты</a>
                </li>
                <li className='flex items-center'>
                    <Russian />
                    <a className="ml-2">Русский</a>
                    <span><ArrowDown /></span>
                </li>
            </NavItems>
            <Contact>
                <Phone />
                <a href="tel:0220505001">0(220) 50 50 01</a>
            </Contact>
        </NavbarWrap>
    )
}

export default Navbar

const NavbarWrap = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:26px 50px;
`
const LogoComponent = styled.div``
const ItemLinks = styled.div`
position: absolute;
bottom:-65px;
z-index:100;
left:-20%;
background: #FFFFFF;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 10px;
padding:8px 15px;
display:none;
:hover{
    display:block;
 
}

a{
    white-space:nowrap;
    font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #231F20;
    :hover{
        color:blue;
    }
}
`
const NavItems = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
li{
    margin:0 25px;

}
a{
    font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #231F20;
cursor: pointer;
}

.about_company_btn{
    &:hover{
       
        ${ItemLinks}{
            display:block;
           :hover{
            display:block;
           }
        }
    }
}

`
const Contact = styled.div`
display:flex;
align-items:center;
border: 1px solid #0175E0;
border-radius: 30px;
padding:16px;
cursor: pointer;
a{
    font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #0175E0;
margin-left: 16px;
}
`

