import { Button } from "components/Button";

export const FeedbackOptions = ({onHandleGood, onHandleNeutral, onHandleBad}) => {
    return (
        <>
            <Button onClick = {onHandleGood } >Good</Button>
            <Button onClick = {onHandleNeutral}>Neutral</Button>
            <Button onClick = {onHandleBad}>Bad</Button> 
        </>
    )
  
}