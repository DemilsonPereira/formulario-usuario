import styled from "styled-components";

const FormContainerStyle = styled.form`

    display: flex;
    align-items: flex-end;
    gap: 0.625rem;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 1.25rem;
    box-shadow: 0rem 0rem 0.313rem #ccc;
    border-radius: 0.313rem;
`;

const InputAreaStyle = styled.div`

    display: flex;
    flex-direction: column;
`;

const InputStyle = styled.input`

    width: 10.5rem;
    padding: 0rem 0.625rem;
    border: 0.063rem solid #bbb;
    border-radius: 0.313rem;
    height: 2.5rem;
`;

const LabelStyle = styled.label``;

const ButtonStyle = styled.button`

    padding: 0.625rem;
    cursor: pointer;
    border-radius: 0.313rem;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 2.625rem;
`;

export {
    FormContainerStyle,
    InputAreaStyle,
    InputStyle,
    LabelStyle,
    ButtonStyle
}