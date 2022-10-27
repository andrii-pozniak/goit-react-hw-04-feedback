import React from "react";
import styled from 'styled-components'


const StylePage = styled.p`
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
color: ${ p => p.theme.colors.text};
padding: ${ p => p.theme.space[0]};
margin: ${ p => p.theme.space[0]};
margin-bottom: ${ p => p.theme.space[2]}px;


`;

 export const Statistics = ({good, neutral, bad,countTotalFeedback,
    countPositiveFeedbackPercentage }) => 
    <>
    <StylePage>Good: {good}</StylePage>
    <StylePage>Neutral: {neutral}</StylePage>
    <StylePage>Bad: {bad}</StylePage>
    <StylePage >Total: {countTotalFeedback }</StylePage>
    <StylePage >StylePageositive feedback: {countPositiveFeedbackPercentage}%</StylePage>

    </>




