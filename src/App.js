
import { useState } from "react";
import { Main } from "./appStyled";
import ChatBox from "./components/chatBox/chatBox";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";



function App() {

  const [messages, setMessages] = useState([])
  const [person, setPerson] = useState("Me")
  return (
    <Main>
      <Header person={person}
        setPerson={setPerson} />
      <ChatBox
        messages={messages}
        setMessages={setMessages}
      />
      <Footer
        messages={messages}
        setMessages={setMessages}
        person={person}
      />
    </Main>

  );
}

export default App;
