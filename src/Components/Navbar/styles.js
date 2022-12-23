import styled from "styled-components";
//import variables colors
import { variables } from "../../Styles/Variables";

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: ${variables.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;


    div{
        width: 90%;
        height: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${variables.colors.blue};

        figure img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
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
       border-top: 2px solid #fff;
       transition: .5s ease-in-out ;


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
`;