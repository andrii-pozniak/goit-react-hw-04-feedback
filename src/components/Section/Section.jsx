import PropTypes from 'prop-types';

export const Section = (props) => {
    return (<h2>{props.children}</h2>)
}

Section.propTypes = {
    children: PropTypes.string.isRequired
}