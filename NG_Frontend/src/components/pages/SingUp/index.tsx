import Img from "next/image";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { Camera } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CatchphraseContainer,
  ChecksIcon,
  Input,
  SelectAvatarField,
  LabelImageFiled,
  InputAvatar,
  SingUpContainer,
} from "./styles";
import { api } from "../../../services/api";
import { toBase64 } from "./toBase64";
import { singUpRequest } from "../../../services/auth";
import { AuthContext } from "../../../contexts/AuthContext";

type Inputs = {
  name: string;
  userName: string;
  password: string;
  avatar: FileList;
};

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const registerFormValidationSchema = zod.object({
  name: zod.string().min(10, "O nome deve ter no mínimo 10 caracteres"),
  userName: zod
    .string()
    .min(3, "o apelido não pode ter menos que 3 caracteres"),
  password: zod.string().min(8, "a senha deve conter no mínimo 8 caracteres"),
  avatar: zod
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Somente formatos .jpg, .jpeg, .png and .webp são suportados."
    ),
});

interface UserValidAPI {
  exist: boolean;
}

export function SingUp() {
  const [validNickName, setValidNickName] = useState<boolean>(false);
  const [avatarBase64, setAvatar64] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState } = useForm<Inputs>({
    resolver: zodResolver(registerFormValidationSchema),
  });

  const { signUp } = useContext(AuthContext);
  console.log("Avtar erorr: ", formState.errors.avatar?.message);

  watch((data) => {
    const { avatar } = data;

    if (avatar && !formState.errors.avatar) {
      if (avatar.length > 0) {
        const getFile = avatar[0];
        toBase64(getFile).then((fileBase64) =>
          setAvatar64(fileBase64 as string)
        );
      }
    }
  });

  async function handleSingUp({ name, userName, password, avatar }: Inputs) {
    if (avatarBase64) {
      await signUp({
        name,
        userName,
        password,
        avatar: avatarBase64,
      });
    }
  }

  async function handleVerifyIfNameIsValid(userName: string) {
    await api.get(`/user/exist/${userName}`).then((response) => {
      const { exist } = response.data as UserValidAPI;
      setValidNickName(!exist);
    });
  }

  return (
    <SingUpContainer>
      <div>
        <h1>Criar conta</h1>
        <form onSubmit={handleSubmit(handleSingUp, watch)}>
          <SelectAvatarField>
            {!avatarBase64 ? (
              <LabelImageFiled animation={"animation"}>
                {
                  <>
                    <span>Selecionar Avatar</span>
                    <InputAvatar
                      placeholder="Avatar"
                      type="file"
                      {...register("avatar", { required: true })}
                    />
                    <Camera size={32} />
                  </>
                }
              </LabelImageFiled>
            ) : (
              <LabelImageFiled animation={"noAnimation"}>
                <InputAvatar
                  placeholder="Avatar"
                  type="file"
                  {...register("avatar", { required: true })}
                />
                <Img alt="avatar" src={avatarBase64} width={120} height={120} />
                {formState.errors.avatar ? (
                  <span>{formState.errors.avatar.message}</span>
                ) : null}
              </LabelImageFiled>
            )}
          </SelectAvatarField>

          <Input placeholder="Nome" {...register("name")} />
          {formState.errors.name ? (
            <span>{formState.errors.name.message}</span>
          ) : null}
          <div>
            <Input placeholder="@ nome de usuário" {...register("userName")} />
            <ChecksIcon size={30} color={validNickName ? "able" : "disable"} />
          </div>
          {formState.errors.userName ? (
            <span>{formState.errors.userName.message}</span>
          ) : null}

          <Input
            placeholder="senha"
            type="password"
            {...register("password")}
          />
          {formState.errors.password ? (
            <span>{formState.errors.password.message}</span>
          ) : null}

          <button
            type="submit"
            // disabled={!validNickName}
          >
            Criar Conta
          </button>
        </form>
      </div>
    </SingUpContainer>
  );
}
