import React from "react"
import "../popular/MostPopular.css"
//import Dcards from "../../Destinations/Dcards"
import AllItem from "../../Destinations/AllItem"

const DestinationHome = () => {
  return (
    <div>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Most Popular Destination</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationHome
