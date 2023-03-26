import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  recoverUserInformation,
  signInRequest,
  singUpRequest,
} from "../services/auth";
import { setCookie, parseCookies } from "nookies";
import { api } from "../services/api";

type User = {
  name: string;
  userName: string;
  avatar: string;
};

type SignUpData = {
  name: string;
  userName: string;
  password: string;
  avatar: string;
};

type SignInData = {
  userName: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<boolean>;
  signUp: (data: SignUpData) => Promise<boolean>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    async () => {
      const { gncashauth_token: token } = parseCookies();

      if (token) {
        const recoverUser = await recoverUserInformation()
          .then((user) => user)
          .catch((error) => {
            console.log(error);
            return null;
          });

        if (recoverUser) {
          setUser(recoverUser.user);
        }

        // recoverUserInformation().then((response) => setUser(response.user));
      }
    };
  }, []);

  async function signUp({ name, userName, password, avatar }: SignUpData) {
    const data = await singUpRequest({
      name,
      userName,
      password,
      avatar,
    });

    if (!data) {
      return true;
    }

    const { token, user } = data;

    setCookie(undefined, "gncashauth_token", token, {
      maxAge: 60 * 60 * 24, // 24h
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    Router.push("/dashboard");
    return false;
  }

  async function signIn({ userName, password }: SignInData) {
    const data = await signInRequest({
      userName,
      password,
    });

    if (!data) {
      return true;
    }

    const { token, user } = data;

    setCookie(undefined, "gncashauth_token", token, {
      maxAge: 60 * 60 * 24, // 24h
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    Router.push("/dashboard");
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
