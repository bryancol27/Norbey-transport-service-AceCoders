import styled from 'styled-components';
import { variables } from '../../Styles/Variables';

export const ExperienceTemplate = styled.section`
    width: 100%;
    /* height: 50vh; */
    background: ${variables.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;

    .experience__image {
        display: none;
        width: 350px;

        img {
            width: 100%;
        }
    }

    .experience__content {
        width: 100%;
        max-width: 450px;
        padding: 50px 25px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 60px;
            color: ${variables.colors.background};
            font-weight: 900;
        }

        .list-experience {
            display: flex;
            flex-direction: column;
            gap: 30px;

            margin-top: 50px;

            &-buble {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                p.text {
                    text-align: center;
                    font-size: 17px;
                    max-width: 300px;
                    color: #416374;

                    @media (min-width: 950px) {
                        max-width: 500px;
                        font-size: 28px;
                    }
                }
            }
        }
    }

    @media (min-width: 950px) {
        /* gap: px; */
        justify-content: space-evenly;

        .experience__image {
            display: block;
        }
    }
`;
