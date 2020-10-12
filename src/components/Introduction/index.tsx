import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
    width: 100%;
    height: 800px;
    background: ${(props: any) => props.theme.colors.secondary.background};
`

const Introduction = () => {
    return (
        <Container>
            Introduction
        </Container>
    )
}

export default Introduction
