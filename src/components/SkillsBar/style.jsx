import styled from "styled-components";

export const StyleSkillsBar = styled.header`
    background-color: #998496;
    /* background-color: greenyellow; */

    width: 100%;
    height: 500px;

    .titleOfSkillsBar1{
        /* background-color: green; */
        color: black;
        display: flex;
        font-size: 50px;
        justify-content: center;

    }

    h1{
        /* margin-bottom: -20px; */
    }

    .boxIcon{
        display: flex;
        justify-content: space-around;
        width: 500px;
        background-color: red;
        flex-wrap: wrap;
        
    }

    .internalBoxIcon{
        display: flex;
        justify-content: center;
        /* background-color: greenyellow; */
        background-color: #998496;
        height: 600px;
        width: 100%;
    }

    .boxInformation{
        text-align: center;
        background-color: #695a67;
        height: 400px;
        width: 600px;
        margin-left: 150px;
        /* display: flex;
        justify-content: center;
        align-items: center; */

    }

    .boxInformationMedium{
        /* background-color: blue; */
    }

    .boxInformationTop{
        display: flex;
        justify-content: center;
        /* background-color: #ccff33; */
    }

    .boxInformationLow{
        /* background-color: purple; */
        display: flex;
        font-size: 20px;
        justify-content: center;
        padding: 20px;
        
    }

    .icon{
        font-size: 90px;
        margin: 10px;
        cursor: pointer;
        /* color: aliceblue; */
    }

    .icon:hover{
        color: #ccff33;
        /* color: #998496; */
    }

`