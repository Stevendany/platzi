import styled, { css } from 'styled-components'
import { fadeIn } from '../styles/animation'

export const List = styled.ul`   
    display:flex;
    overflow:scroll;
    width: 100%;
    &::-webkit-scrollbar{
        display:none;
    }
    ${props => props.fixed && css`
        ${fadeIn({ time: '0.5s' })}
        background: #ffffff;
        border-radius: 60px;
        position: fixed;
        top: -20px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        max-width: 400px;
        right: 0;
        margin: 0 auto;
        padding: 5px;
        z-index: 1;
        transform: scale(0.5)
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
