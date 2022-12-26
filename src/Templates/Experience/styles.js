import styled from "styled-components";
import { variables } from "../../Styles/Variables";

export const ExperienceTemplate = styled.section`
    width: 100%;
    height: 50vh;
    background: ${variables.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1{
            font-size: 2rem;
            color: ${variables.colors.text};
        }
    }
`;