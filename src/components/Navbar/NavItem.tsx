import React from 'react'
import styled from '@emotion/styled'

const Item = styled.li`
    color: ${(p: any) => [p.selected ? p.theme.colors.primary.active : 'white']};
    margin: 0 24px;
    padding: 8px;
    position: relative;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    &::before {
        display: block;
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        content: ${(p: any) => p.selected ? '"<"' : ''}
    }

    &::after {
        display: block;
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        content:  ${(p: any) => p.selected ? '">"' : ''}
    }
`

const NavItem = ({ selected, onClick, children }) => (
        <Item selected={selected} onClick={onClick}>
            {children}
        </Item>
    )

export default NavItem
