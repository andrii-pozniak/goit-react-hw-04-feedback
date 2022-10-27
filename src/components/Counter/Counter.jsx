import React, {Component } from "react";
// import ReactDom from "react-dom";
import { Button } from "components/Button";
import {Statistics} from "components/Statistics/Statistics";

export class Counter extends Component {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        // total:0
      };
      handleGood = () => {
        this.setState (prevState => {
          return {
            good: prevState.good +1,
          } 
        } );
    };
    handleNeutral = () => {
        this.setState (prevState => {
            return {
                neutral: prevState.neutral +1,
            }   
        });    
    };
    handleBad = () => {
        this.setState (prevState => {
            
            return {
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
    
     
  
    
    render()  {      

        return (<>

            <Button onClick = {this.handleGood}>Good</Button>
            <Button onClick = {this.handleNeutral}>Neutral</Button>
            <Button onClick = {this.handleBad}>Bad</Button>
            <h2>Statistics</h2>
            <Statistics good={this.state.good} neutral={this.state.neutral} 
            bad={this.state.bad}  countTotalFeedback={this.countTotalFeedback()} 
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage().toFixed(0)}/>
       
        </>)
       
    
}
}