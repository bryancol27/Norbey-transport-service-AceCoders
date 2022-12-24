import { variables } from '../Styles/Variables';
import { ChangebackGround } from '../Styles/Animations';
import styled from 'styled-components';

export const HeaderStyle = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    margin-top: 70px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${ChangebackGround} 10s ease-in-out infinite;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    div {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 50px;

        h1 {
            color: ${variables.colors.blue};
            font-size: 2.5rem;
            font-weight: bold;
        }
        p {
            color: #fff;
            font-size: 1rem;
            text-align: center;
        }
        button {
            width: 130px;
            height: 50px;
            background: transparent;
            border: 3px solid ${variables.colors.blue};
            border-radius: 30px;
            font-size: 1rem;
            color: ${variables.colors.blue};
            font-weight: bold;

            :hover {
                background: ${variables.colors.blue};
                color: #fff;
                box-shadow: 0 0 1rem ${variables.colors.blue};
            }
        }
    }
`;
