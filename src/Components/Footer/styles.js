import styled from 'styled-components';

//Import needed vars
import { variables } from '@styles/Variables';

export const FooterContainer = styled.footer`
    position: relative;
    bottom: 0px;
    width: 100%;
    background-color: ${variables.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 100px;

    .secondaryContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        h2 {
            font-size: 34px;
            font-weight: 700;
            color: ${variables.colors.background};
        }

        div {
            display: flex;
            gap: 30px;

            img {
                width: 46px;
                height: 46px;
            }
        }
    }

    .copy {
        /* display: flex; */
        /* justify-content: flex-end; */
        color: ${variables.colors.background};
        font-size: 24px;

        img {
            width: 30px;
            height: 27px;
        }
    }
`;
