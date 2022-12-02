import { MainChatBox, Message } from "./chatBoxStyled";
import tickGreen from "../../assets/tick-green-double.svg"




function ChatBox(props) {

    function deletaMensagem(idDaMensagem){
        const apagarMensagens = props.messages.filter((mensagem)=>{
            return mensagem.id !== idDaMensagem
        })
        props.setMessages(apagarMensagens)
    }

    const mostraMensagem = props.messages.map((mensagem, index) => {
        return (
            <Message
                key={index}
                person={mensagem.person}
                onDoubleClick={()=>deletaMensagem(mensagem.id)}
            >
                <h1>{mensagem.person}</h1>
                <div>
                    <p>{mensagem.message}</p>
                    <div>
                        <img src={tickGreen} alt="tick" />
                    </div>
                    <p>{mensagem.hora} </p>
                </div>
            </Message>

        )

    })

    return (
        <MainChatBox>
            {mostraMensagem}
        </MainChatBox>
    )

}

export default ChatBox