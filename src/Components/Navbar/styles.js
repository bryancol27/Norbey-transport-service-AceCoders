import styled from 'styled-components';
//import variables colors
import { variables } from '../../Styles/Variables';

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: ${variables.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
    top: 0px;
    z-index: 4;
    border-bottom: 2px solid #fff;

    @media (max-width: 850px){
        .NavDesktop{
            display: none !important;
        }
    }

    @media (min-width: 850px){
        .NavMobile{
            display: none !important;
        }
    }

    .NavDesktop{
        width:80%;
        height:100%;
        display: flex;
        justify-content: space-around;

        
        figure {
            width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }

        a{
        width: 70%;
        height: 100%;
        line-height: 70px;
        text-align: center;
        text-decoration: none;
        color: ${variables.colors.text};
        font-weight: bolder;
        cursor: pointer;
       }
       a:hover{
        border-bottom: 3px solid #fff;
        color: #fff;
       }
       .Logo{
        width: 50px;
        height: 100%;
        line-height: 0px;
        margin: 0px 1rem;
        cursor: pointer;
       }
    }
    .NavMobile{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        .navHeader{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 1rem;

            figure {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
        div:nth-child(2){

       position: absolute;
       z-index -2;
       width: 100%;
       height: auto;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       background: ${variables.colors.blue};
       transition: .5s ease-in-out ;
       border-top: 2px solid #fff;

    a{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        color: ${variables.colors.text};
        font-weight: bolder;
       }
       a:hover{
        background: rgba(0,0,0,20%);
       }
       
    }
    
    .hidden{
         bottom: 0px; 
         opacity: 0;
        
    }
    .vissible{
         bottom: -250px; 
         opacity: 1;
    } 
    }
`;
