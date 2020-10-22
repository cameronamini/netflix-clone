import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from './axios'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'



export default function Banner({ fetchURL }) {
    const [bannerMovie, setBannerMovie] = useState([])

    const loadMovieData = async () => {
        const response = await axios.get(fetchURL);
        console.log(response.data.results);   //not necessary
        const randomInt = getRandomInt();
        setBannerMovie(response.data.results[randomInt]);
    }
    useEffect(() => {
        loadMovieData();
    }, [])

    const getRandomInt = () => {
        // generate a random number from 0 to 19, to select a random item in 20-item movie array
        return Math.floor(Math.random() * 19)
    }

    const baseImgUrl = `http://image.tmdb.org/t/p/w1280/`

    const truncatetoPeriod = (str) => {
        return str?.slice(0, str.indexOf('.'))
    }

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${baseImgUrl}${bannerMovie.backdrop_path})`
            }}>
            {/* radial-gradient(circle at top, #EEE 0, #EEE 25%, #000 99%)  */}

            <div className="banner__contents">
                <div className="banner__movie-title-container">
                    <div className="banner__movie-title">{bannerMovie.name}</div>
                </div>
                <div className="btn-container">
                    <button className="btn play">
                        <PlayArrowIcon className="icon" />Play
                    </button>
                    <button className="btn more-info">
                        <InfoOutlinedIcon className="icon" /> More Info
                    </button>
                </div>
                <p className="banner__overview">{truncatetoPeriod(bannerMovie.overview) + '...'}</p>


            </div>


        </div>

    )
}

