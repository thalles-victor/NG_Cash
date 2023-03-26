import { FileDoc, ShieldCheck, Smiley, Money } from "phosphor-react";
import { useEffect, useState } from "react";
import { ToggleContainer, Title } from "./styles";

type MessageState = "security" | "easy" | "doc" | "money";


const listOfMessages: MessageState[] = ["security", "easy", "doc", "money"];


export function ToggleMessage() {
  const [message, setMessage] = useState<MessageState>("security");
  const [count, setCount]   = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if ((count) >= (listOfMessages.length)) {
        setCount(0)
        console.log(count)
      } else {
        setMessage(listOfMessages[count])
        setCount(count + 1)
      }
    }, 8000)
  }, [count])

  if (message === "security") {
    return(
      <ToggleContainer>
        <Title>Tenha segurança e confiança na hora de realizar suas transações</Title>
        <ShieldCheck size={200} />
      </ToggleContainer>
    )
  }
    

  if (message === "easy") {
    return(
      <ToggleContainer>
        <Title>Tenha facilidade e agilidade sem processos desnecessários</Title>
        <Smiley size={200} />
      </ToggleContainer>
    )
  }

  if (message === "doc") {
    return(
      <ToggleContainer>
        <Title>Faça relatórios de transações quando quiser</Title>
        <FileDoc size={200}/>
      </ToggleContainer>
    )
  }

  if (message === "money") {
    return(
      <ToggleContainer>
        <h1>Ganhe R$ 100,00 cash back na de se cadastrar na plataforma</h1>
        <Money size={200}/>
      </ToggleContainer>
    )
  }

  return(
    <h1>NG Cash</h1>
  );
};