import React, { useState } from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import Menu from './Menu'
import NavItem from './NavItem'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    height: 140px;
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    align-items: center;

    padding: 0 24px;

`

const Navbar = () => {
    const [selected, setSelected] = useState(0)

    return (
        <Container>
            <Logo />
            <Menu>
                <NavItem selected={selected === 0} onClick={() => setSelected(0)}>Services</NavItem>
                <NavItem selected={selected === 1} onClick={() => setSelected(1)}>Works</NavItem>
                <NavItem selected={selected === 2} onClick={() => setSelected(2)}>Notes</NavItem>
                <NavItem selected={selected === 3} onClick={() => setSelected(3)}>Contact</NavItem>
            </Menu>
        </Container>
    )}

export default Navbar
