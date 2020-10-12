import React from 'react'
import styled from '@emotion/styled'

const Container = styled.ul`
    padding: 0 16px;
    display: flex;
`

const Menu = ({ children }) => (
        <Container>
            {children}
        </Container>
    )

export default Menu
