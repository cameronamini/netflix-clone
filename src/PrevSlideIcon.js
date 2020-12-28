/** @jsx jsx */
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { css, jsx } from '@emotion/core'

const PrevSlideIcon = ({ clickHandler }) => {
    return (
        <div onClick={clickHandler} css={css`
            background-color: rgba(48,48,48, 0.1); 
            position: absolute;
            left: 0; 
            top: 0; 
            z-index: 100; 
            height: 100%;
            width: 50px;
            cursor: pointer;
            opacity: 0;
            transition: .2s ease;
            &:hover {
                background-color: rgba(48,48,48, 0.6);
                opacity: 1;
            }
            `}>
            {/* <FontAwesomeIcon icon={faArrowRight} style={{ background: 'none' }} /> */}
            <ArrowBackIosIcon style={{ position: 'absolute', background: 'none', top: '40%', left: 0 }} onClick={clickHandler} fontSize="large" />
        </div>
    )
}
export default PrevSlideIcon;
