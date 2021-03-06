import styled from "styled-components";



export const Wraper = styled.div`   

    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    min-width: 375px;
    @media (max-width: 375px ){
        width: 98vw;
        height: 100%;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }
    @media (min-width: 375px) and (max-width: 992px){
        width: 98vw;
        height: 100%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
        width: 98vw;

        height: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1440px){
        max-width: 1440px;
        height: 100%;
        margin: 1rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
