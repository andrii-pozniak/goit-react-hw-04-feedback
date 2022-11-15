
import {useState} from "react";

import {Statistics} from "components/Statistics/Statistics";
import {  Notification} from "components/Notification/Notification";
import { Section  } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [open, setOpen] = useState(false); 
 
  let total = 0
    let setPositiveFeedback = 0
 
  const handleGood = () => {
    setGood (prevState => prevState+1)
    setOpen (true)
    
  }

  const handleNeutral = () => {
    setNeutral (prevState => prevState+1)
    setOpen (true)
  }
  const handleBad = () => {
    setBad (prevState => prevState+1)
    setOpen (true)
  }
  const onChangeTotal =() => {
    total = good + neutral + bad 
 
  console.log('total', total)
  }
  const countPositiveFeedbackPercentage = () => {
    if(total !== 0){
      setPositiveFeedback = good *100 / (total)
    console.log(setPositiveFeedback)
    console.log(total)
    return total, setPositiveFeedback;
    }
    return setPositiveFeedback = 0 };
  
  return (<>
    <Section title="text">Please leave feedback</Section>
    <FeedbackOptions 
    onHandleGood = {handleGood } 
    onHandleNeutral={handleNeutral}
    onHandleBad = {handleBad}
    />

      <Section title="text">Statistics</Section>
        { !open && 
          <Notification message="There is no feedback">
            No feedback given
          </Notification>
                
        }
        { open && 
          <Statistics good={good} neutral={neutral} 
          bad={bad}  total={onChangeTotal()} 
          positiveFeedback={countPositiveFeedbackPercentage().toFixed(0)}/>
                
        }
     
    </>);
  
}


       
  