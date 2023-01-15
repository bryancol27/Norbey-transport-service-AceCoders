import styled from 'styled-components';
//import varibles
import { variables } from '../../Styles/Variables';

export const AboutUsTemplate = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    div {
        width: 80%;
        max-width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-top: 50px;

        h1 {
            color: ${variables.colors.blue};
            font-size: 2rem;
            font-weight: 800;
        }
        p {
            text-align: center;
            color: ${variables.colors.text};
        }
    }

    figure {
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            max-width: 200px;
        }
    }

    @media (min-width: 850px) {
        flex-direction: row-reverse;
        justify-content: center;
        gap: 100px;

        figure {
            img {
                max-width: 300px;
                padding: 75px 0 0;
            }
        }
    }
`;
