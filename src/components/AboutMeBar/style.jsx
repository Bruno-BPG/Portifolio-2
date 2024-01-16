import styled from "styled-components";

export const StyleAboutMeBar = styled.header`

    background-color: #2d2c26;
    color: aliceblue;
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .boxAboutBox{
        display: flex;
        justify-content: space-around;
        width: 100px;
        height: 100px;
        align-items: center;
    }

    .iconAboutBox{
        font-size: 35px;
        cursor: pointer;
    }

    .iconAboutBox:hover{
        color: #ccff33;
    }
`