import styled from 'styled-components';

//import variables of colors
import { variables } from '@styles/Variables';

export const ContainOurCar = styled.section`
    width: 100%;
    height: 110vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    background: ${variables.colors.blue};
    padding: 1rem 1rem;
    position: relative;

    @media (min-width: 900px) {
        align-items: center;
        height: 100vh;
    }

    button {
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: 10px 30px;
        background: ${variables.colors.black};
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        border: 1px solid #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-top: 4rem;

        h1 {
            font-size: 36px;
            color: #fff;
        }
        p {
            text-align: center;
            color: ${variables.colors.text};
            font-weight: bold;
        }
        h2 {
            font-size: 2rem;
        }
    }
    div:nth-child(3) {
        width: 100%;
        align-items: flex-start;
        li {
            text-align: center;
            color: ${variables.colors.text};
            font-weight: bold;
            margin-left: 30px;
            line-height: 27px;
        }
    }

    figure {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 370px;

        @media (min-width: 400px) {
            width: 90%;
            max-width: 60%;
            left: none;
            right: 0px !important;
        }

        img {
            width: 100%;
            object-fit: contain;
        }
    }
`;
