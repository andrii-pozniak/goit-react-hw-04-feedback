import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyleButton = styled.button`
padding: ${p => p.theme.space[2]}px;
margin-right: ${p => p.theme.space[2]}px;
:hover {
    background-color: ${ p => p.theme.colors.accent};
};
`;

export const Button =( ({type='button', children, onClick}) => {
    return <StyleButton type={type} onClick={onClick}>{children}</StyleButton>
})

Button.propTypes = {
    children: PropTypes.string.isRequired
}
