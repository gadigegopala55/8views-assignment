import './index.css'
import ReactPopUp from '../ReactPopUp'

const Packages = () => (
  <div className="package-container">
    <h1 className="package-heading">
      3 PERSONALIZED DESIGN PACKAGES FROM
      <br />
      ONE OF THE TOP INTERIOR DESIGNERS
      <br />
      IN HYDERABAD
    </h1>
    <div className="pack-container">
      <div className="bottom-card">
        <h1 className="pack-heading">
          LIFESTYLE TURNKEY
          <br />
          PACKAGE
        </h1>
        <p className="pack-paragraph">
          You get complete home <br />
          decor and
          <br />
          renovation services,
          <br />
          including
        </p>
        <ul className="list-container">
          <li>
            Personalized lighting, flooring. cabinet,&counterop surfacing
            solutions
          </li>
          <li>Procurement assistance</li>
          <li>Professional execution</li>
        </ul>
        <ReactPopUp data="BOOK NOW" />
      </div>
      <div className="bottom-card">
        <h1 className="pack-heading">COMPREHENSIVE CONSULTATION PACKAGE</h1>
        <p className="pack-paragraph">
          After the submission of floor plans and room measurements, you get a
          detailed interior design plan that consists of:
        </p>
        <ul className="list-container">
          <li>
            Custom design concepts (shown through 3D rendering& 2D
            visualizations).
          </li>
          <li>Space planning& furniture arrangement solutions</li>
          <li>Furnishes & finishing guidance</li>
        </ul>
        <ReactPopUp data="BOOK NOW" />
      </div>
      <div className="bottom-card">
        <h1 className="pack-heading">
          DEEPA SEN EXCLUSIVE DESIGN-IN-A-DAY PACKAGE
        </h1>
        <p className="pack-paragraph">
          Includes 4 hours of one-on-one consultation with DEEPA DAS,where you
          can polish your design strategy by reviewing challenges such as paint
          slection, furniture placement, etc.
        </p>
        <ReactPopUp data="BOOK NOW" />
      </div>
    </div>
  </div>
)

export default Packages
