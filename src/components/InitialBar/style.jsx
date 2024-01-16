import styled from "styled-components";

export const StyleInitialPage = styled.header`

    background: linear-gradient(60deg, #2d2c26 0 50%, #c3b457 50% 100%);
    width: 100%;
    height: 620px;

    display: flex;
    justify-content: center;
    align-items:center;
    color: aliceblue;
    font-size: 18px;

    .BoxButtons{
        display: flex;
        justify-content: space-around;
    }

    button{
        background-color: #998496;
        color: aliceblue;
        border: none;
        width: 100px;
        height: 50px;
        border-radius: 50px;
        cursor: pointer;
    }
    button:hover{
        color:#ccff33;
    }
    
    h2{
        margin-top: -20px;
        margin-bottom: -20px;
    }
`;
