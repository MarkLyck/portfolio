import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
    width: 100%;
    height: 800px;
    background: ${(props: any) => props.theme.colors.primary.background};
    padding-top: 40px;
`

const Hero = () => (
        <Container>
Hero
        </Container>
    )


export default Hero
