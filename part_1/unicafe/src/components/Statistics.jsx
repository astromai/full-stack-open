import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {

    const total = good + neutral + bad
    const avr = (good - bad) / total
    const positive = (good / total) * 100 

    return (
        <ul>
            {total > 0 ? (
              <>
                <StatisticLine title={"good"} value={good}/>
                <StatisticLine title={"neutral"} value={neutral}/>
                <StatisticLine title={"bad"} value={bad}/>
                <StatisticLine title={"total"} value={total}/>
                <StatisticLine title={"avr"} value={avr}/>
                <StatisticLine title={"positive"} value={positive}/>
              </>
            ) : (
              <p>No feedback given</p>
            )}
        </ul>
    )
}

export default Statistics; 