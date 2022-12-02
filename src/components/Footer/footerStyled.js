import styled from "styled-components";

export const FooterMain = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;


div:first-child{
    width: 80%;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 25px ;
    border: 1px black solid;
    margin: 10px;
    input{
    flex-grow: 1;
    height: 50px;
    border: 0 none;
    outline: none;
    }
}


div:last-child{
    width: 10%;
    a{
        display: flex;
        justify-content: end;
        margin: 5px;
        img{
            width: 50px;
            height: 50px;
            background-color: green;
            border-radius: 50px;
        }
    }
}

`