import PropTypes from 'prop-types';
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

 export const Statistics = ({good, neutral, bad,total,
    positiveFeedback }) =>   
    <>
    <StylePage>Good: {good}</StylePage>
    <StylePage>Neutral: {neutral}</StylePage>
    <StylePage>Bad: {bad}</StylePage>
    <StylePage >Total: {total }</StylePage>
    <StylePage >StylePageositive feedback: {positiveFeedback}%</StylePage>

    </>

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired,
    // positiveFeedback: PropTypes.number.isRequired,
    // total: PropTypes.number.isRequired 

}


