import './index.css'

const Gallery = () => (
  <div className="gallery-container">
    <h1 className="gallery-heading">
      See how our most sought-after interior designers in Hyderabad have
      <br />
      previous worked their magic to create exceptional and purposeful spaces
      <br />
      for our clients.
    </h1>
    <div className="image-container">
      <img
        src="https://res.cloudinary.com/debrutohq/image/upload/v1650681513/Gallery-images-1_fcoaun.jpg"
        alt="gallery1"
        className="image"
      />
      <img
        src="https://res.cloudinary.com/debrutohq/image/upload/v1650681662/Gallery-images-2_ephbdq.jpg"
        alt="gallery2"
        className="image"
      />
      <img
        src="https://res.cloudinary.com/debrutohq/image/upload/v1650681753/Gallery-images-3_sejbr3.jpg"
        alt="gallery3"
        className="image"
      />
    </div>
  </div>
)

export default Gallery
