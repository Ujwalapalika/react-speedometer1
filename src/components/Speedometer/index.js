// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state: {count: 0}

  Accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  Break = () => {
    this.setState(prevState =>
      prevState.count < 0 ? {count: 0} : {count: prevState.count - 10},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p>Speed is {count} mph</p>
        <p>Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button type="button" className="button" onClick={this.Accelerate}>
            Accelerate
          </button>

          <button type="button" className="button" onClick={this.Brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
