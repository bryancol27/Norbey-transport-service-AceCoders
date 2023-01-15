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

    @media (min-width: 900px) {
        gap: 2rem;
    }

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

        @media (min-width: 900px) {
            flex-direction: row;
            justify-content: space-evenly;
            margin-top: 1rem;
        }

        &__card {
            width: 100%;
            height: 140px;
            position: relative;
            border-radius: 20px;
            padding: 10px;

            display: flex;
            align-items: center;
            gap: 10px;

            .nameTestimonial_desktop {
                display: none;

                @media (min-width: 900px) {
                    display: block;
                    color: #fff;
                    width: 100px;
                    text-align: center;
                }
            }

            @media (min-width: 900px) {
                max-width: 400px;
                min-height: 460px;
                flex-direction: column-reverse;
                align-items: center;
                justify-content: flex-start;
                padding: 30px;
                gap: 1rem;
            }

            background-color: ${variables.colors.blue};

            .comment-img {
                position: absolute;
                width: 30px;
                right: 10px;
                top: 10px;

                @media (min-width: 900px) {
                    width: 120px;
                    right: 36%;
                    top: 50px;
                }
            }

            .person-img {
                width: 100px;
                @media (min-width: 900px) {
                    width: 120px;
                }
            }

            .texts {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                @media (min-width: 900px) {
                    align-items: center;
                }

                h4 {
                    font-size: 21px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: ${variables.colors.background};

                    @media (min-width: 900px) {
                        display: none;
                    }
                }

                p {
                    font-size: 18px;
                    text-align: start;
                    font-weight: bold;
                    color: #416374;
                    @media (min-width: 900px) {
                        text-align: center;
                    }
                }
            }
        }
    }
`;
