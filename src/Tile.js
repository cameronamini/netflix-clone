import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Tile = ({ src }) => (
    <a>
        <img css={css`
            overflow-y: visible;
            margin-right: 5px;
            z-index: 50;
            transition: 0.3s;
            border-radius: 4px;f
            object-fit: contain;
            width: 100px;
            &:hover {
                transform: scale(1.2) !important
            }
            @media (min-width: 480px) {
                width: 170px
            }

`}
            src={src}
        />
    </a>
)


export default Tile