import React from 'react'
import styled from '@emotion/styled'

const FirstName = styled.span`
    font-weight: bold;
`
const LastName = styled.span`
    font-weight: 500;
`

const Logo = () => (
        <div>
           <FirstName>Mark</FirstName> 
           <LastName>Lyck</LastName>
        </div>
    )


export default Logo
