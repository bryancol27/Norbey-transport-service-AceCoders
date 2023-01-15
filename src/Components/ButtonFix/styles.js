import styled from 'styled-components';

//import variables of colors
import { variables } from '@styles/Variables';

export const ButtonFixStyle = styled.button`
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: ${variables.colors.blue};
    height: 50px;
    color: #fff;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 0 20px;
    z-index: 200;
    cursor: pointer;
    
    &:hover{
        box-shadow: 0 0 .5rem ${variables.colors.blue};
    }
`;
