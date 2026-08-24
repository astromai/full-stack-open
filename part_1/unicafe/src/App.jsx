import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
  }

  const handleBadClick = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button 
          onClick={handleGoodClick}
          text={"good"}/>
        <Button 
          onClick={handleNeutralClick}
          text={"neutral"}/>  
        <Button 
          onClick={handleBadClick}
          text={"bad"}/>  
      </div>  
      <h1>Statistics</h1>
      <div>
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}/>  
      </div>  
    </div>
  )
}

export default App