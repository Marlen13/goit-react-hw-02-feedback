import React, { Component } from "react";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Statistics } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
  onLeaveFeedback = (e) => {
    const options = e.target.name;

		this.setState(prevState => ({
			[options]: prevState[options] + 1
		}));
	};
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  }
  countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};
    
    render() {
      const { good, neutral, bad } = this.state; 
      const stateKey = Object.keys(this.state);
      const total = this.countTotalFeedback();
      const positivePercentage=this.countPositiveFeedbackPercentage()
     
      
       
      return (
        <div>
          <Section title="Please leave feedback">
        
            <FeedbackOptions options={stateKey} onLeaveFeedback={this.onLeaveFeedback} />
          </Section>

          {total === 0 ? (<Notification message="There is no feedback"/>):
          (<Section title="Statistic">
           <Statistics good={good} neutral={neutral} bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            />
          </Section> )     
          }
        </div>
       )
    }

}
export default App