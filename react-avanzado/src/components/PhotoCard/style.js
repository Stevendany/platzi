import styled from 'styled-components'
import { fadeIn } from '../styles/animation'

export const Article = styled.article`
    min-height: 200px; 
`

export const ImgWrapper = styled.div`
border-radius: 10px;
display:block;
height: 0;
overflow: hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100%;
`

export const Img = styled.img`
    ${fadeIn({ time: '1s' })}
    box-shadow: 10px 10px -14px rgba(0, 0, 0, 0.5);
    height: 100%;
    object-fit: cover;
    top:0;
    position: absolute;
    width: 100%;
`

export const Button = styled.button`
    display:flex;
    align-items:center;
    padding-top: 8px;
    & svg{
        margin-right: 4px;
    }
`
