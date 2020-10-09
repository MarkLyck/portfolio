import React from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

const Navbar = () => (
        <Container>
            <Logo />
        </Container>
    )

export default Navbar
