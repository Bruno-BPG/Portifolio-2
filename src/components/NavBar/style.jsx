import styled from "styled-components";

export const StyleNavBar = styled.header`
/* @media screen and (max-width:1000px){ } */

background: #2d2c26;
opacity: 95%;
position: fixed;
height: 85px;
width: 100%;

display: flex;
justify-content: space-around;

.logo{
    /* background-color: green; */
    display: flex;
    font-family: cursive;
    font-size: 28px;
    width: 205px;
    color:aliceblue;
}


.HtmlLogo{
    background-color: #f25c2c;
    height: 55px;
    width: 55px;
    margin-top: 15px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
}

.CssLogo{
    background-color: #1674bb;
    height: 55px;
    width: 55px;
    margin-top: 15px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
}

.JsLogo{
    font-family: Georgia, serif;
    /* background-color: yellow; */
    background-image: linear-gradient(to right, #b9b92889, yellow);
    /* background-image: linear-gradient(to right, #b9b92889, yellow); */
    height: 55px;
    width: 55px;
    margin-top: 15px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
}

nav{
    width: 500px;
    display: flex;
    justify-content: space-around;
    padding-top: 31px;

}

.ItenNav{
    cursor: pointer;
    color: aliceblue;
    font-size: 18px;
}
.ItenNav:hover{
    color: #ccff33;
    text-decoration:underline;
}




`
