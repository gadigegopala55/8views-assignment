// Write your code here
import {Component} from 'react'
import './index.css'
import ReactPopUp from '../ReactPopUp'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-image">
          <div>
            <img
              src="https://res.cloudinary.com/debrutohq/image/upload/v1650646636/logo-studiomarigold_dktcaf.png"
              alt="logo"
            />
            <h1 className="home-heading">BeSpoke Interior Design</h1>
            <h1 className="home-heading">Solutions</h1>
            <p className="home-paragraph">Let Us Give Your Home a New Face</p>
          </div>
          <div className="home-bottom-image">
            <h1 className="home-bottom-heading">
              GETTING PERSONALIZED INTERIOR
            </h1>
            <h1 className="home-bottom-heading">
              IN HYDERABAD HAS NEVER BEEN THIS EASY
            </h1>
          </div>
          <ReactPopUp data="REVAMP YOUR HOME TODAY" />
        </div>
      </div>
    )
  }
}

export default Home
