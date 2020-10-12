import React from 'react'
import styled from '@emotion/styled'

const FirstName = styled.span`
    font-weight: 500;
    margin-right: 6px;
`
const LastName = styled.span`
    font-weight: 100;
`

const Container = styled.div`
margin-right: 120px;
font-size: 28px;
`

const Logo = () => (
        <Container>
           <FirstName>Daniel</FirstName> 
           <LastName>Stephan</LastName>
        </Container>
    )


export default Logo
