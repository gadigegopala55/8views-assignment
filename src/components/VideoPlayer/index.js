import './index.css'
import ReactPlayer from 'react-player'
import ReactPopUp from '../ReactPopUp'

const videoURL = 'https://youtu.be/ZgqwjeGj4nw'

const VideoPlayer = () => (
  <div className="video-player-container">
    <h1 className="player-heading">
      HEAR WHAT OUR INTERIOR DESIGNER, <br /> DEEPA SEN,HAS TO SAY
    </h1>
    <div>
      <ReactPlayer url={videoURL} />
    </div>
    <ReactPopUp data="BOOK A FREE CONSULTATION WITH DEEPA SEN TODAY" />
  </div>
)

export default VideoPlayer
