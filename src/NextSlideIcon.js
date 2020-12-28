// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { css, jsx } from '@emotion/core'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NextSlideIcon = ({ clickHandler }) => {
    return (
        <div onClick={clickHandler} css={css`
        background-color: rgba(48,48,48, 0.1); 
        position: absolute;
        right: 0; 
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
            <ArrowForwardIosIcon style={{ position: 'absolute', background: 'none', top: '40%', right: 0, }} fontSize="large" />
        </div>
    )
}
export default NextSlideIcon;
