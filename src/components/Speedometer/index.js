// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer"
        />
        <h2 className="sub-heading">Speed is {count}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="Accelerate-Button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="Brake-button"
            type="button"
            onClick={this.onDecrease}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
