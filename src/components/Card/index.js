import './index.css'
import Select from 'react-select'

const options = [
  {value: 'option1', label: 'option1'},
  {value: 'option2', label: 'option2'},
  {value: 'option3', label: 'option3'},
  {value: 'option4', label: 'option4'},
]

const Card = () => (
  <div>
    <div className="card-contain">
      <div className="card-container">
        <div className="small-container">
          <h1 className="card-heading">BUDGET</h1>
          <Select options={options} className="select-con" />
        </div>
        <div className="small-container">
          <h1 className="card-heading">
            SQUARE <br /> FOOTAGE
          </h1>
          <Select options={options} className="select-con" />
        </div>
        <div className="small-container">
          <h1 className="card-heading">
            PROPERTY <br /> TYPE
          </h1>
          <Select options={options} className="select-con" />
        </div>
        <div className="small-container">
          <h1 className="card-heading">BEDROOMS</h1>
          <Select options={options} className="select-con" />
        </div>
        <div className="small-container">
          <h1 className="card-heading">
            SCOPE OF <br /> WORK
          </h1>
          <Select options={options} className="select-con" />
        </div>
      </div>
    </div>
    <div className="buttoned-container">
      <button type="button" className="buttoned">
        PROCEED
      </button>
    </div>
  </div>
)

export default Card
