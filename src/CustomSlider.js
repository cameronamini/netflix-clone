
/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Tile from './Tile'

import PrevSlideIcon from './PrevSlideIcon'
import NextSlideIcon from './NextSlideIcon'

/**
 * @function CustomSlider
 */

const CustomSlider = ({ movieImages }) => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({ translate: 0, activeIndex: 0 })
    const { translate, activeIndex } = state

    const nextSlides = () => {
        if (activeIndex === 2) {
            return setState({
                translate: 2 * getWidth(),
                activeIndex: 2,
            })
        }
        setState({
            translate: getWidth() * (activeIndex + 1),
            activeIndex: activeIndex + 1
        })
        console.log('hello')
        console.log(activeIndex)
    }

    const prevSlides = () => {
        if (activeIndex === 0) {
            return setState({
                translate: 0,
                activeIndex: 0,
            })
        }
        setState({
            translate: getWidth() * (activeIndex - 1),
            activeIndex: activeIndex - 1
        })

        console.log('hello')
        console.log(activeIndex)
    }
    return (
        <div css={CustomSliderCSS}>
            <PrevSlideIcon clickHandler={prevSlides} />

            <SliderContent
                translate={translate}
                width={getWidth()}>

                {movieImages.map(url => {
                    return (
                        <Tile key={url} className="row__poster" src={url} />
                    )
                })}

            </SliderContent>
            <NextSlideIcon clickHandler={nextSlides} />
        </div>
    )
}

const CustomSliderCSS = css`
      position: relative;
      width: 100vw;
      overflow-y: visible;
      top: 45px;
  `

export default CustomSlider