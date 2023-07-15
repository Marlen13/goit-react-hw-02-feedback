import React, {Component} from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistic/Statistic";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    // onGood = () => {
    //     this.setState(prevState => ({
    //         good: prevState.good + 1,
    //     }))
    // }
    // onNeutral = () => {
    //     this.setState(prevState => ({
    //         good: prevState.neutral + 1,
    //     }))
    // }
    // onBad = () => {
    //     this.setState(prevState => ({
    //         good: prevState.bad + 1,
    //     }))
    // }
    render() {
      const { good, neutral, bad } = this.state; 
      const stateKey = Object.keys(this.state)
       
      return (
        <div>
          <h1>Please leave feedback</h1>
          <Feedback options={stateKey}/>
          
          <h2>Statistic</h2>
          <Statistics good={good} neutral={neutral} bad={bad}
            // total={total} positivePercente={positivePercente}
          />
             
        </div>
       )
    }

}
export default App