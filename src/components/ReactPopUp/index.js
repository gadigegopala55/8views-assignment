import Popup from 'reactjs-popup'
import './index.css'

const ReactPopUp = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="button-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            {data}
          </button>
        }
      >
        {close => (
          <div className="popUp-container">
            <div>
              <h1 className="popup-heading">Contact Us</h1>
              <hr />
              <form className="form-container">
                <label className="label-container">
                  Name
                  <br />
                  <input type="text" className="input-container" />
                </label>
                <br />
                <label className="label-container">
                  Email
                  <br />
                  <input type="text" className="input-container" />
                </label>
                <br />
                <label className="label-container">
                  phone number
                  <br />
                  <input type="number" className="input-container" />
                </label>
                <br />
                <label className="label-container">
                  Message
                  <br />
                  <input type="text" className="input-container" />
                </label>
              </form>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default ReactPopUp
