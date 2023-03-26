import Router from "next/router"
import { LoginContainer, InputForm, ButtonSubmit } from "./styles";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

type LoginRequest = {
  userName: string;
  password: string;
}

const loginFormValidationSchema = zod.object({
  userName: zod.string().min(3, "usuário não pode ter menos que 3 caracteres"),
  password: zod.string().min(8, "a senha deve conter no mínimo 8 caracteres")
})

export function Login() {
  const [authError, setAuthError] = useState(false);

  const { register, handleSubmit, formState } = useForm<LoginRequest>({
    resolver: zodResolver(loginFormValidationSchema)
  });


  const {
    signIn,
    isAuthenticated,
    user
  } = useContext(AuthContext);


  async function handleSingIn(data: LoginRequest) {
    setAuthError(await signIn(data));

    if (!authError) {
      Router.push("/dashboard")
    }
  }

  return(
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleSingIn)}>
          <InputForm
            placeholder="user name"
            {...register("userName")}
          />
          {
            formState.errors.userName? <span>{formState.errors.userName.message}</span> : null
          }
          <InputForm
            placeholder="Senha" 
            type="password"
            {...register("password")}
          />
          {
            formState.errors.password? <span>{formState.errors.password?.message}</span> : null
          }
          <ButtonSubmit
            type="submit"
          >
            Entrar
          </ButtonSubmit>
        </form>

        <h3>
          Não tem conta ainda 🤔?Então vamos
          <a onClick={() => {
            Router.push("/criar-conta")
          }}> criar uma 😃</a>
        </h3>
      </div>
    </LoginContainer>
  )
}