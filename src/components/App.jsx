
import React, {Component } from "react";

import {Statistics} from "components/Statistics/Statistics";
import {  Notification} from "components/Notification/Notification";
import { Section  } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class App  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    open: false,     
  };
  handleGood = () => {
    this.setState (prevState => {
      return {
        open: true,
        good: prevState.good +1,
      } 
    } );
};
handleNeutral = () => {
    this.setState (prevState => {
       
        return {
            open: true,
            neutral: prevState.neutral +1,
        }   
    });    
};
handleBad = () => {
    this.setState (prevState => {
        
        return {
            open: true,
            bad: prevState.bad +1,
        }   
    }); 
};
countTotalFeedback = () => {
   this.total = this.state.bad + this.state.neutral + this.state.good 
    return this.total
}
     
countPositiveFeedbackPercentage = () => {
    this.positiveFeedback = this.state.good *100 / this.total
    return (this.total !== 0)? this.positiveFeedback : 0
}
openStatisticPage = () => {
    this.setState ({ open: true});
}; 

render()  {      

    return (<>
    <Section title="text">Please leave feedback</Section>
    <FeedbackOptions 
    onHandleGood = {this.handleGood } 
    onHandleNeutral={this.handleNeutral}
    onHandleBad = {this.handleBad}
    />

      <Section title="text">Statistics</Section>
        { !this.state.open && 
          <Notification message="There is no feedback">
            No feedback given
          </Notification>
                
        }
        { this.state.open && 
          <Statistics good={this.state.good} neutral={this.state.neutral} 
          bad={this.state.bad}  countTotalFeedback={this.countTotalFeedback()} 
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage().toFixed(0)}/>
                
        }
     
    </>);
 
};
}
       
  