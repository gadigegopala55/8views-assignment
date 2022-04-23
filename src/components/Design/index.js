import './index.css'
import ReactPopUp from '../ReactPopUp'

const Design = () => (
  <div className="design-container">
    <p className="design-paragraph">
      From giving a new and distinctive look to the existing furniture to
      <br />
      redesigning your home to add a contemporary flair to it, Studio Marigold
      <br />
      has cost-effective design solutions for your every requirement.
    </p>
    <h1 className="design-heading">SPACE WEB DESIGN</h1>
    <div className="design-image-container">
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650698604/Spaces-images-Homes_p1duc8.jpg"
          alt="deimage"
          className="design-image"
        />
        <h1 className="card-heading">Homes</h1>
        <p className="card-paragraph">
          1/2/3/4/5 BHK | Bungalows | Villas | Studio <br /> Apartment |
          Penthouses
        </p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650712690/Spaces-images-rooms_n5jzsn.jpg"
          alt="deimage"
          className="design-image"
        />
        <h1 className="card-heading">Rooms</h1>
        <p className="card-paragraph">Bedrooms | Living Room | Pantry</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650712796/Spaces-images-Bathroom_wdwmeo.jpg"
          alt="deimage"
          className="design-image"
        />
        <h1 className="card-heading">Bathroom</h1>
        <p className="card-paragraph">
          Full | Half | Quarter| Split | Jack-and-Jill
        </p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650712932/Spaces-images-Kitchen_enfpuw.jpg"
          alt="deimage"
          className="design-image"
        />
        <h1 className="card-heading">Modular Kitchen</h1>
        <p className="card-paragraph">Parallel | L-shaped | U-Shaped |Open</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650712983/Spaces-images-outdoors_fhzfpe.jpg"
          alt="deimage"
          className="design-image"
        />
        <h1 className="card-heading">Outdoor</h1>
        <p className="card-paragraph">Patio | Gazebo</p>
      </div>
    </div>
    <h1 className="design-heading">SERVICES WE PROVIDE</h1>
    <div className="design-image-container">
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650713257/design-consultation-a_g4ucck.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">Complete design consultation</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650713438/furnitures-a_tgazae.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">Customized furniture & furshinings</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650713516/vastu_fbzh2d.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">Vastu-complaint decor</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650713564/delivery-a_ehb5xn.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">Purchasing,delivery,& installation.</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650693978/sales-support-a_bwfkih.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">After-sales support</p>
      </div>
      <div className="imaged-container">
        <img
          src="https://res.cloudinary.com/debrutohq/image/upload/v1650713700/contact-assistance-a_l8daiq.png"
          alt="deimage"
          className="design-image"
        />
        <p className="card-paragraph">One point contact for all assistance.</p>
      </div>
    </div>
    <ReactPopUp data="TELL US WHAT WE CAN DO FOR YOU" />
  </div>
)

export default Design
