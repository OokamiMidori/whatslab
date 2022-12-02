import { FooterMain } from "./footerStyled";
import mic from "../../assets/microphone.svg"
import paperclip from "../../assets/paperclip.svg"
import smile from "../../assets/smiley.svg"
import { useState } from "react";


function Footer(props) {

    const [message, setMessage] = useState("")



    const onChangeInput = (event) => {
        setMessage(event.target.value)
    }

    function onKeyDownInput(event) {
        if (event.key === "Enter") {
            let novaMensagem = [...props.messages]

            const novaPessoaMensagem = {
                person: props.person,
                message: message,
                id:Date.now(),
                hora: new Date().toLocaleString("pt-BR",{
                    hour:"numeric",
                    minute:"numeric",
                    hour12:true
                })
            }

            novaMensagem.push(novaPessoaMensagem)

            props.setMessages(novaMensagem)

            setMessage("")

        }
    }



    return (
        <FooterMain>
            <div>
                <a href="#">
                    <img src={smile} alt="Smiley" />
                </a>
                <input type={"text"} value={message} onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                <a href="#">
                    <img src={paperclip} alt="Paper Clip" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={mic} alt="Microfone" />
                </a>
            </div>
        </FooterMain>
    )
}

export default Footer