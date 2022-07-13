import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg"
import { ReactComponent as Russian } from "../../assets/russian.svg"
import { ReactComponent as Phone } from "../../assets/phone.svg"
import { Link } from "react-router-dom"
import { ReactComponent as Burger } from "../../assets/burger.svg"
import { ReactComponent as Close } from "../../assets/close.svg"

const SideBar = ({ handleBurger }) => {
    return (
        <Wrapper>
            <NavItems >
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <a>Наша продукция</a>
                </li>
                <li className='about_company_btn relative'>
                    <div className='flex items-center'>
                        <a>О компании</a>
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
                <Contact>
                    <div>
                        <Phone />
                        <a href="tel:0220505001">0(220) 50 50 01</a>
                    </div>
                </Contact>
                <li className='flex items-center'>
                    <Russian />
                    <a className="ml-2">Русский</a>
                    <span><ArrowDown /></span>
                </li>
             
            </NavItems>
        </Wrapper>
    )
}

export default SideBar

const Wrapper = styled.div`
background-color: #fff;
position: relative;
z-index: 10000;
height: 100%;
`

const ItemLinks = styled.div`
border-radius: 10px;
padding:8px 15px;
margin-top:20px;

a{
    white-space:nowrap;
    font-weight: 400;
font-size: 14px;
line-height: 24px;
color: red;
}
`

const NavItems = styled.ul`

display:flex;
justify-content:space-between;
align-items:left;
flex-direction:column;
/* height:100%; */

li{
    margin:0 25px;
    margin-bottom:30px;

}
a{
    font-weight: 500;
font-size: 18px;
line-height: 24px;
color: #231F20;
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
display: inline-block;
max-width:190px;
margin-bottom:20px;
margin-left:20px;
div{
    display:flex;
    /* display: inline-block; */
    align-items:center;
    border: 1px solid #0175E0;
    border-radius: 30px;
    padding:16px;
    cursor: pointer;
}
a{
    font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #0175E0;
margin-left: 16px;
}

`
