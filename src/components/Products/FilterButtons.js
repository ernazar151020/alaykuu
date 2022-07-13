import React from 'react'
import  styled  from 'styled-components';

const FilterButtons = ({activeBtn , handleClick}) => {
    return (
        <Wrapper>
            <button className={activeBtn.milk && "active"} onClick={()=>handleClick("milk")}>Молочная продукция</button>
            <button className={activeBtn.national && "active"} onClick={()=>handleClick("national")}>Национальные напитки</button>
            <button className={activeBtn.cold && "active"} onClick={()=>handleClick("cold")}>Прохладительные напитки</button>
        </Wrapper>
    )
}

export default FilterButtons

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
@media(max-width:767px){
    display:none;
}

button{
    padding:10px 20px;
    font-weight: 500;
font-size: 20px;
line-height: 28px;
color: #808080;
background: rgba(255, 255, 255, 0.6);
border-radius: 30px;
margin:0 20px;

}
.active{
    color: #FFFFFF;
    background: #0175E0;
}
`