import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const StatisicsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => { 
  const {good, neutral, bad} = props
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
      <StatisicsLine text="Good:" value={good} />
      <StatisicsLine text="Neutral:" value={neutral} />
      <StatisicsLine text="Bad:" value={bad} />
      <StatisicsLine text="All:" value={good + neutral + bad} />
      <StatisicsLine text="Average:" value={(good - bad) / (good + neutral + bad)} />
      <StatisicsLine text="Positive:" value={good / (good + neutral + bad) * 100 + " %"} />
      </tbody>
    </table>
    </div>

      )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad +1)}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
      

      
      

    </div>
  )
}

export default App