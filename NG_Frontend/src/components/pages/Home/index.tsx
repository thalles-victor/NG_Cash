import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { keyframes } from "../../../styles";
import { ApresentatonMessage, ButtonsContainer, ButtonToDashboard, ButtonAccout, HomeContainer } from "./styles"
import { ToggleMessage } from "./ToggleMessage"

const downAnimation = keyframes({
  from: {
    transform: "translate(0px, -40px)",
    opacity: 0

  },
  to: {
    transform: "transalate(0px, 0px)",
    opacity: 1
  }
})

export function Home() {
  const { isAuthenticated, user }  = useContext(AuthContext);

  return(
    <HomeContainer>
      <ApresentatonMessage>
        <ToggleMessage />
      </ApresentatonMessage>
      
      { isAuthenticated?
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }} >
          {user?.userName? <h2>Você está logado como: {user.userName}</h2> : null }
          <ButtonToDashboard onClick={() => {
            Router.push("/dashboard")
          }}>
            
            Acessar a dashboard
          </ButtonToDashboard>
        </div>
        :
        <ButtonsContainer>
          <ButtonAccout onClick={() => {
            Router.push("/login")
          }}>
            Logar
          </ButtonAccout>

          <ButtonAccout onClick={() => {
            Router.push("/criar-conta")
          }}>
            Criar conta
          </ButtonAccout>
      </ButtonsContainer>
      }

      <p>Conheça o nosso <a href="https://ng.cash/">site oficial</a></p>

    </HomeContainer>
  );
}