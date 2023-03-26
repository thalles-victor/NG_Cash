import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext";

import { api } from "../../../../../services/api";
import { TransactionContext } from "../../TransactionProvider";

import { BackButton, ButtonContainer, NextButton } from "../Button/styles";

import { AccountContainer, Avatar, Content, Footer } from "./styles";

interface AccountProps {
  handleBack: () => void;
  handleConfirm: () => void;
  balance: number | null;
}

export function AccountInformation({
  handleBack,
  handleConfirm,
  balance,
}: AccountProps) {
  const { fethTransactions } = useContext(TransactionContext);
  const {
    transactionInfo: { targetName, value },
    getUserForTransaction,
    userForExecuteTransaction: userForTransection,
  } = useContext(TransactionContext);

  function handleBackToForm() {
    handleBack();
  }
  getUserForTransaction(targetName);

  async function createTransaction() {
    if (!balance) return;

    if (!(balance >= value)) {
      alert("value invalid");
      return;
    }

    await api({
      url: "/user/transaction",
      method: "post",
      data: {
        transaction: {
          targetUserName: targetName,
          value: typeof value === "string" ? parseInt(value) : value,
        },
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        const data = error.data;
        console.log(error);
      });

    handleConfirm();
    fethTransactions();
  }

  return (
    <AccountContainer>
      {userForTransection ? (
        <Avatar
          alt="avatar"
          src={userForTransection?.avatar}
          width={80}
          height={80}
        />
      ) : null}

      <Content>
        <h1>Enviar para</h1>

        <h2>{userForTransection?.userName}</h2>
        <h3>{userForTransection?.name}</h3>
        <p>
          Valor da transação: <span>{value}</span>
        </p>
        <p>
          Momento da transação: <span>Agora</span>
        </p>
      </Content>

      <Footer>
        <ButtonContainer className="buttoncontainer">
          <BackButton
            onClick={() => {
              handleBackToForm();
            }}
          >
            <ArrowLeft />
          </BackButton>

          <NextButton
            onClick={() => {
              createTransaction();
            }}
          >
            <ArrowRight />
          </NextButton>
        </ButtonContainer>
      </Footer>
    </AccountContainer>
  );
}
