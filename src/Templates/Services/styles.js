import styled from "styled-components";
//import variable sof colors
import { variables } from '../../Styles/Variables';


export const SectionServices = styled.section`
    width: 100%;
    height: 800px;
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

    .containSwiper{
        width: 100%;
        height: 300px;

        div{
            figure{
                position: relative;
                width: 200px;
                height: 200px;
                overflow: hidden;
                border-radius: 15px;
                image{
                    width:100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            h5{
                position: absolute;
                bottom: 10px;
                left: 10px;
                color: #fff;
                font-size: 1rem;
            }
        }
    }

    .servicesContain_Buttons{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        button{
            width: 80%;
            height: 50px;
            background: ${variables.colors.black};
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            border: 2px solid #fff;
            border-radius: 5px;
            svg{
                margin-right: 10px
            }
        }
    }
`;