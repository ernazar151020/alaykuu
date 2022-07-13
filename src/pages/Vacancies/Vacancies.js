import React from 'react'
import styled from 'styled-components';
import Layout from './../../components/Layout/Layout';

const vacancies = [
    {
        name: "Курьер",
        description: "Описание с требованиями"
    },
    {
        name: "Курьер",
        description: "Описание с требованиями"
    },
    {
        name: "Курьер",
        description: "Описание с требованиями"
    },
]

const Vacancies = () => {
    return (
        <Layout>
            <Wrapper>
                <h1 className='mb-6'>Вакансии</h1>
                <div className='lg:grid lg:grid-cols-3'>
                    {
                        vacancies.map((item) => {
                            return <Vacancy>
                                <h3>Курьер</h3>
                                <p>Описание с требованиями</p>
                            </Vacancy>
                        })
                    }
                </div>
            </Wrapper>
        </Layout>
    )
}

export default Vacancies

const Wrapper = styled.div`
padding:40px 144px 40px;
@media(max-width:768px){
    padding:15px;
}
h1{
    font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #000000;
}
`

const Vacancy = styled.div`
padding:20px;
border: 1px solid #00497A;
border-radius: 20px;
margin:10px;
h3{
    font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #000000;
margin-bottom:16px;
}
p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
}
`