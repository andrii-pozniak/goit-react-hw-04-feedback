import styled from 'styled-components'


const StyleButton = styled.button`
padding: ${p => p.theme.space[2]}px;
margin-right: ${p => p.theme.space[2]}px;
`;

export const Button =( ({type='button', children, onClick}) => {
    return <StyleButton type={type} onClick={onClick}>{children}</StyleButton>
})