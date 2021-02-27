import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--primary);
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
      opacity: 0.6;
    }
    &:hover {
      opacity: 0.6;
      background: var(--primary);
      box-shadow: 0 0 2px white, 0 0 4px white, 0 0 8px white;
    }

    
`;

export default Button;
