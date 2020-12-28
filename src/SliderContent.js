import React from 'react'
import styled from '@emotion/styled'

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out 0.45s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
    position: relative;
    z-index: 1;
    overflow-y: visible;
    margin-left: 15px;
    @media (min-width: 480px) {
        margin-left: 40px;
    }
`
export default SliderContent
