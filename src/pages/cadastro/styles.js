import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:focus {
        opacity: .5;
    }
    @media (max-width: 800px) {
        position: bottom;
        
        margin-left: 10px;
        right: 0;
        bottom: 0;
        background: var(--black);
        border-radius: 5px;
        border: 1;
        text-align: center;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        position: relative;
        
        margin-left: 0px;
        right: 0;
        bottom: 0;
        background: var(--black);
        border-radius: 5px;
        border: 1;
        text-align: center;
    }
`;

export const TableC = styled.tr`
    :hover{
        background-color: ${(props) => props.fieldColor || 'blue'};
    } 
`;
