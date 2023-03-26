import Router from "next/router";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  Form,
  ValueInput,
  Input,
} from "./styles";

import { ButtonContainer, BackButton, NextButton,  } from "../Button/styles";
import { useContext, useState } from "react";
import { api } from "../../../../../services/api";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { TransactionContext } from "../../TransactionProvider";

interface FormProps {
  handleNext: () => void;
}

interface TransactionProps {
  value: number;
  targetName: string;
}

export function FormComponent({ handleNext }: FormProps) {
  const { register, handleSubmit, watch } = useForm<TransactionProps>();
  const [nameIsValid, setNameIsValid] = useState(false);
  
  const { user } = useContext(AuthContext);
  const { handleSetTransactionInfo } = useContext(TransactionContext);

  function handleSetTransaction(data: TransactionProps) {
    handleSetTransactionInfo({
      targetName: data.targetName,
      value: data.value
    });

    handleNext()
  }

  async function checkIfTargetNameIsValid(userName: string) {
    if (!user) return;

    if (userName === "" || userName === undefined) {
      setNameIsValid(false)
    }

    if (userName !== user.userName){
      const { exist } = await api.get(`/user/exist/${userName}`)
        .then((response) => {
          return response.data;
        });
        
        setNameIsValid(exist)
    }
  }
  
  watch(data => {
    const { targetName, value } = data;

    if (targetName) {
      checkIfTargetNameIsValid(targetName)
    }
  })
  

  return(
    <Form action="" onSubmit={handleSubmit(handleSetTransaction)} >
            
      <ValueInput
        type="number"
        min="1"
        {...register("value", { valueAsNumber: true })}  
      />

      <Input
        type="text"
        {...register("targetName")}
      />
      
        {
          nameIsValid? <span>Valido</span> : <span>Usuário não encontrado</span>
        }
      <label>nome</label>

      <ButtonContainer>
        
      <Dialog.Close asChild>
        <BackButton>
          <X />
        </BackButton>

      </Dialog.Close>
        <NextButton type="submit"
          disabled={!nameIsValid}
          onClick={ () => {

            
        }}>
          <ArrowRight />
        </NextButton>
      </ButtonContainer>
    </Form>
  );
}