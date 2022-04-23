import './index.css'

import Slider from 'react-slick'
import ReactPlayer from 'react-player'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactPopUp from '../ReactPopUp'

const ClientsReview = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const videoURL = 'https://youtu.be/ZpEPJGFpZtg'

  return (
    <div>
      <ReactPopUp data="GET QUOTATION" />
      <div className="review-container">
        <h1 className="review-heading">A FEW WORDS FROM OUR CLIENTS</h1>
        <div className="clients-bottom">
          <div className="clients-container">
            <Slider {...settings}>
              <div>
                <h1 className="review-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. -Lorem ipsum
                </h1>
              </div>
              <div>
                <h1 className="review-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. -Lorem ipsum
                </h1>
              </div>
            </Slider>
          </div>
          <div className="video-container">
            <div className="responsive-container">
              <ReactPlayer url={videoURL} />
            </div>
          </div>
        </div>
      </div>
      <ReactPopUp data="BE ANOTHER STUDIO MARIGOLD SUCCESS STORY" />
    </div>
  )
}

export default ClientsReview
