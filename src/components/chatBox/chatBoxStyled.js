import styled from "styled-components";


export const MainChatBox = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 16px;
overflow-y: scroll;
`


export const Message = styled.div`
    background-color:  ${props => props.person === "Me" ? "#61c554" : "rgb(232, 236, 239)"};
    color:  ${props => props.person === "Me" ? "white" : "black"};
    margin-left: ${props => props.person === "Me" ? "auto" : 0};
    min-width: 80px;
    max-width: 300px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    
        h1{
            font-weight: 500;
            font-size: 20px;
            padding-bottom: 4px;
            
        }
        div{
            display: flex;
            flex-direction: column;
           
        
            p{
            font-weight: 400;
            font-size: 16px;
           word-wrap: break-word;
            }
            div{
            font-weight: 500px;
            font-size: 11px;
            margin-left: auto;
            
            color: #727272;

                img{
                width: 16px;
                margin-left: 4px;
                }
            }
    }
        
`