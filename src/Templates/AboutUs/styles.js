import styled from 'styled-components';
//import varibles
import { variables } from '../../Styles/Variables';

export const AboutUsTemplate = styled.section`
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;

    div {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-top: 50px;

        h1{
            color: ${variables.colors.blue};
            font-size: 2rem;
        }
        p{
            text-align: center;
            color: ${variables.colors.text};
        }
    }

    figure{
        position: absolute;
        bottom: -20px;

        img{
            width: 200px;
        }
    }
`;
