import styled from "styled-components";
//import variable sof colors
import { variables } from '../../Styles/Variables';


export const SectionServices = styled.section`
    width: 100%;
    height: 500px;
    background: ${variables.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 0px 1rem;

    h1{
        font-size: 60px;
        color: #fff;
    }

    p{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        color: #416374;
        text-align: center;
    }
`;