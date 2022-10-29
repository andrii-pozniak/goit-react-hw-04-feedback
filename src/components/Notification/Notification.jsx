import PropTypes from 'prop-types';

export const Notification = (props) => {
  return ( <p>{props.children}</p>) 
}

Notification.propTypes = {
    children: PropTypes.string.isRequired
}