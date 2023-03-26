import { v4 as uuid_v4 } from "uuid";
import { image } from "../components/pages/Dashboard/components/AccountInfo/image.temp";
import { api } from "./api";

type SignUpRequest = {
  name: string;
  userName: string;
  password: string;
  avatar: string;
};

type SignInRequest = {
  userName: string;
  password: string;
};

type AuthResponse = {
  user: {
    name: string;
    userName: string;
    avatar: string;
  };
  token: string;
};

export async function singUpRequest({
  name,
  userName,
  password,
  avatar,
}: SignUpRequest) {
  const response = await api({
    url: "/user",
    method: "post",
    data: {
      user: {
        name: name,
        userName: userName,
        password: password,
        avatar: avatar,
      },
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  if (response) {
    const { user, token } = response;

    return {
      user,
      token,
    };
  }
}

export async function signInRequest({ userName, password }: SignInRequest) {
  const response = await api<AuthResponse>({
    method: "post",
    url: "/user/login",
    data: {
      user: {
        userName: userName,
        password: password,
      },
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (response) {
    const { user, token } = response;

    return {
      user,
      token,
    };
  }
}

export async function recoverUserInformation() {
  const user = await api
    .get("/user/recover")
    .then((respnse) => {
      return respnse.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return {
    user: {
      name: user.name,
      userName: user.userName,
      avatar: user.avatar,
    },
  };
}
