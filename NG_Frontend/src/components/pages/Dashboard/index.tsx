import Img from "next/image";
import { createContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  DashboardContainer,
  Content,
  InfoTransactionContainer,
  BalanceContainer,
} from "./styles";

import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  ExitButton,
} from "./dialog";

import { FormComponent } from "./components/Form";
import { AccountInformation } from "./components/AccountInfo";
import { useContext, useEffect, useState } from "react";
import { History } from "./components/History";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/api";
import { TransactionContext, TransactionProvider } from "./TransactionProvider";

type TransactionState = "form" | "account" | "confirmed";
import { priceFormatter } from "../../../utils/formatter";

interface TargetUserProps {
  name: string;
  userName: string;
  avatar: string;
}

interface TransactionDataProps {
  targetUser: TargetUserProps | null;
  value: number;
  handleSetTargetUser: (targetUser: TargetUserProps) => void;
  handleSetValue: (value: number) => void;
}

export function Dashboard() {
  const [targetUser, setTargetUser] = useState<TargetUserProps | null>(null);
  const [value, setValue] = useState<number>(0);

  const [balance, setBalance] = useState<number>(0);
  const [transactionState, setTransactionState] =
    useState<TransactionState>("form");

  const { fethTransactions, transactions } = useContext(TransactionContext);

  const { user } = useContext(AuthContext);

  async function getBalance() {
    await api.get("/user/balance").then((response) => {
      const data = response.data;

      setBalance(data.balance);
    });
  }

  function handleSetTargetUser(targetUser: TargetUserProps) {
    setTargetUser(targetUser);
  }

  function handleSetValue(value: number) {
    setValue(value);
  }

  function handleNextToAccountInfo() {
    setTransactionState("account");
  }

  function handleBackToForm() {
    setTransactionState("form");
  }

  function handleConfirmTransaction() {
    setTransactionState("confirmed");
  }

  fethTransactions;

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <TransactionProvider>
      <DashboardContainer>
        <Content>
          <InfoTransactionContainer>
            <BalanceContainer>
              <h1>
                {balance ? priceFormatter.format(balance) : "carregando..."}
              </h1>
              <p>saldo</p>
            </BalanceContainer>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Fazer transferência</button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                  <Dialog.Close asChild>
                    <ExitButton size={18} />
                  </Dialog.Close>
                  <DialogTitle>Fazer transação</DialogTitle>
                  <DialogDescription>
                    Tenha certeza que os dados estão corretos ao realizar a
                    transação
                  </DialogDescription>
                  <TransactionProvider>
                    {transactionState === "account" ? (
                      <AccountInformation
                        balance={balance}
                        handleBack={handleBackToForm}
                        handleConfirm={handleConfirmTransaction}
                      />
                    ) : (
                      <FormComponent handleNext={handleNextToAccountInfo} />
                    )}
                  </TransactionProvider>
                </DialogContent>
              </Dialog.Portal>
            </Dialog.Root>
          </InfoTransactionContainer>

          <History />
        </Content>
      </DashboardContainer>
    </TransactionProvider>
  );
}
