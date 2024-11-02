import React from 'react'
import HomePage from './homePage'
import AboutPage from './aboutPage'
import Places from './places'
import ReviewPge from './reviewPge'
import Price from './price'
import MapComponent from './MapComponent';
function contentPage() {
  return (
    <div className=''>
      <div> <HomePage/></div>
      <div> <AboutPage/></div>
      <div> <Places/></div>
      <div> <ReviewPge/></div>
      <div> <Price/></div>
      <div className="App">
            <h1>My Google Map</h1>
            <MapComponent />
        </div>
    </div>
  )
}

export default contentPage
