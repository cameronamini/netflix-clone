import React from 'react';
import Row from './Row'
import requests from './requests.js'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
        <Banner fetchURL={requests.fetchNetflixOriginals} />
      </div>
      <div className="app-body">
        <Row title={'Trending Now'} fetchURL={requests.fetchTrendingNow} />
        <Row title={'Netflix Originals'} fetchURL={requests.fetchNetflixOriginals} />
        <Row title={'Action Movies'} fetchURL={requests.fetchTopAction} />
        <Row title={'Drama Movies'} fetchURL={requests.fetchTopDrama} />
        <Row title={'Comedy Movies'} fetchURL={requests.fetchTopComedy} />
        <Row title={'Documentaries'} fetchURL={requests.fetchTopDoc} />
      </div>
    </div>
  );
}
