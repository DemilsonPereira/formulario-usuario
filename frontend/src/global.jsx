import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
}
`;

const ContainerStyle = styled.div`
    width: 100%;
    max-width: 70rem;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
`;

const TitleStyle = styled.h2`
    margin: 4rem 0 2.5rem 0rem;
    border:solid #ccc 1px;
    border-radius:0px 35px 0px 25px;
    padding: 1rem;
    box-shadow: 0rem 0.456rem 0.313rem #ccc;
    background-color: #ffff;
`;

export {
    GlobalStyle,
    ContainerStyle,
    TitleStyle
}