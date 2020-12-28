// import { DriveEtaRounded } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import axios from './axios'  // this file uses a default export so we can name instance whatever we want

import './Row.css'
import CustomSlider from './CustomSlider'


export default function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([])


    const loadData = async () => {
        const response = await axios.get(fetchURL);
        /* the sole advantage of using axios instead of fetch api in this project is 
        not having to write out full url in requests.js */
        setMovies(response.data.results);    // note: always first console log response to see data structure
        //   return response;  // don't actually need this return statement
    }

    useEffect(() => {
        loadData();
    }, [fetchURL])  // anytime Row loads, useEffect hook will run 

    const movieImages = movies.map(movie => {
        return `http://image.tmdb.org/t/p/w185${movie.poster_path}`
    })

    return (
        <div className="row">
            <h6 className="row__title">{title}</h6>
            <CustomSlider movieImages={movieImages}>

            </CustomSlider>
            {/* <ArrowBackIosIcon />
            <ArrowForwardIosIcon /> */}
        </div>
    )
}
