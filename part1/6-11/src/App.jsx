import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>{props.text}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <></>
    )
  }

  const average = () => {
    return (good - bad) / total
  }

  const perc_pos = () => {
    return (good / total)*100
  }

  return (
    <>
      <tbody>
        <StatisticLine text = "good" value = {good}></StatisticLine>
        <StatisticLine text = "neutral" value = {neutral}></StatisticLine>
        <StatisticLine text = "bad" value = {bad}></StatisticLine>
        <StatisticLine text = "all" value = {good + neutral + bad}></StatisticLine>
        <StatisticLine text = "average" value = {average()}></StatisticLine>
        <StatisticLine text = "positive" value = {perc_pos().toString() + '%'}></StatisticLine>
      </tbody>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
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
      <p>
        <Button handler = {() => setGood(good + 1)} text = 'good'></Button>
        <Button handler = {() => setNeutral(neutral + 1)} text = 'neutral'></Button>
        <Button handler = {() => setBad(bad + 1)} text = 'bad'></Button>
      </p>
      <h2>Statistics</h2>
    <table>
      <Statistics good = {good} neutral = {neutral} bad = {bad}></Statistics>
    </table>
    </div>
  )
}

export default App