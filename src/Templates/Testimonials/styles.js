import styled from 'styled-components';

// Import variables
import { variables } from '@styles/Variables';

export const TestimonialsContainer = styled.section`
    width: 100%;
    background-color: ${variables.colors.background};
    padding: 75px 15px 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: ${variables.colors.blue};
        font-weight: 700;
        font-size: 60px;
        margin-bottom: 25px;
    }

    p {
        text-align: center;
        color: ${variables.colors.text};
        font-weight: 500;
        font-size: 22px;
    }

    .testimonials__cards {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;

        &__card {
            width: 100%;
            height: 140px;
            position: relative;
            border-radius: 20px;
            padding: 10px;

            display: flex;
            align-items: center;
            gap: 10px;

            background-color: ${variables.colors.blue};

            .comment-img {
                position: absolute;
                width: 30px;
                right: 10px;
                top: 10px;
            }

            .person-img {
                width: 100px;
            }

            .texts {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                h4 {
                    font-size: 21px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: ${variables.colors.background};
                }

                p {
                    font-size: 18px;
                    text-align: start;
                    font-weight: bold;
                    color: #416374;
                }
            }
        }
    }
`;
