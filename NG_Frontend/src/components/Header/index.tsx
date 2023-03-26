import Router from "next/router"
import Img from "next/image";
import { destroyCookie } from "nookies"

import { HeaderContainer, ProfileContainer,  ProfileIcon, SignOutIcon } from "./styles";
import Logo from "../../assets/NGLogo.svg"

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


export function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  function handleCheckIsIstAuthenticatio() {
    if (!isAuthenticated) {
      Router.push("/login")
    }
  }

  async function handleLogout() {
    destroyCookie(null, "gncashauth_token")
    Router.push("/login")

  }

  return(
    <HeaderContainer>
      <Img
        src={Logo}
        width={100}
        height={100}
        alt=""
        onClick={() => {
          Router.push("/")
        }}
      />

      <ProfileContainer>
        <ProfileIcon
          alt="usuário"
          size={32} onClick={() =>{
            handleCheckIsIstAuthenticatio()      
          }}/>
        <SignOutIcon size={32}
          alt="sair"
          onClick={() => {
            handleLogout()
          }}/>
      </ProfileContainer>

    </HeaderContainer>
  )
}