import styled from "styled-components";


const TableStyle = styled.table`

    width: 100%;
    background-color: #fff;
    padding: 1.25rem;
    box-shadow: 0rem 0rem 0.313rem #ccc;
    border-radius: 0.313rem;
    max-width: 65rem;
    margin: 1.25rem auto;
    word-break: break-all;
`;

const TheadStyle = styled.thead``;

const TrStyle = styled.tr``;

const ThStyle = styled.th`

    text-align: start;
    border-bottom: inset 0.150rem #ccc;
    padding-bottom: 0.313rem;

    @media(max-width: 31.25rem){
        ${(props) => props.onlyWeb && "display: none"} ;
    }
`;

const TbodyStyle = styled.tbody``;

const TdStyle = styled.td`

    padding: 0.938rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
    
    @media(max-width: 31.25rem){
        ${(props) => props.onlyWeb && "display: none"};
    }
`;


export {
    TableStyle,
    TheadStyle,
    TrStyle,
    ThStyle,
    TbodyStyle,
    TdStyle
}