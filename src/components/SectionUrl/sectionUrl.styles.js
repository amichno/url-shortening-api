import styled from "styled-components";

export const UrlWrapper = styled.div`
                width:80%;
                height: 7rem;
                max-height: 7.9rem;
                background-color: ${({theme}) =>theme.colors.VeryDarkViolet};
                background-image: url("../../images/bg-boost-desktop.svg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: bottom;
                flex-wrap: wrap;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 5;
                position: relative;

                &.Show::after{
                    content: "Please add a link";
                    font-style:italic;
                    color: ${({theme}) => theme.colors.Red} ;
                    font-size: 0.6rem;
                    width: 30%;
                    height: 1rem;
                    z-index: 25;
                    position: absolute;
                    bottom:5%;
                    left: 5%;
                    display: block;
                    @media (max-width: ${({theme})=> theme.mediaQueries.xs} ){
                            bottom:42%;
                            left:5%;
                            width: 80%;
                        }
                        @media (min-width: ${({theme})=> theme.mediaQueries.xs}) and (max-width: ${({theme})=> theme.mediaQueries.m}){
                            bottom:42%;
                            left:5%;
                            width:80%;
                        }
                }
                &.Hide::after{
                    content: "Please add a link";
                    font-style:italic;
                    color: ${({theme}) => theme.colors.Red} ;
                    font-size: 0.6rem;
                    width: 30%;
                    height: 1rem;
                    z-index: 25;
                    position: relative;
                    left: -29%;
                    top: -10%;
                    display: none;
                    
                }
    @media (max-width: ${({theme})=> theme.mediaQueries.xs} ){
        width: 90%;
        height: 100%;
        padding-bottom: 0.3rem;
    }
    @media (min-width: ${({theme})=> theme.mediaQueries.xs}) and (max-width: ${({theme})=> theme.mediaQueries.m}){
        width: 90%;
        height: 100%;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
    
    
`;

export const Input = styled.input`
    height: 3rem;
    width: 60%;
    padding-left: 0.5rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.Gray};
    margin: 0.25rem auto;
    border: 2px solid transparent;
    &:focus{
        outline: none;
    }
    &.Show{
        outline: none;
        border: 2px solid ${({theme}) => theme.colors.Red} ;
    }
    @media (max-width: ${({theme}) => theme.mediaQueries.xs} ){
        width: 90%;
    }
    @media (min-width: ${({theme}) => theme.mediaQueries.xs} ) and (max-width: ${({theme}) => theme.mediaQueries.m} ){
        width: 90%;
    }
`;

export const AddLink = styled.p`
    font-size: 0.5rem;
    color:red;
`;

export const ButtonShorten = styled.button`
    width: ${props => props.isHalf?"5rem":"10rem"};
    height: ${props => props.isHalf?"2rem":"3rem"};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: ${props=> props.isDark?"hsl(255, 11%, 22%)":"hsl(180, 66%, 49%)"};
    color:white;
    border: none;
    margin: 0.25rem auto;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: hsla(180, 66%, 49%, 0.5);
    }
    @media (max-width: ${({theme})=> theme.mediaQueries.s}){
       width:90%;
       margin-top: 0.6rem;
    }
    @media (min-width: ${({theme})=> theme.mediaQueries.s}) and (max-width: ${({theme})=> theme.mediaQueries.m}){
        margin-top: 0.5rem;
    }
`;

