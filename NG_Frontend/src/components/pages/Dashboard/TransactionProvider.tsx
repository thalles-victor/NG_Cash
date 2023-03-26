import { createContext, ReactNode, useState } from "react";
import { api } from "../../../services/api";

export interface TransactionsProps {
  id_pk: string;
  createdAt: Date;
  debitedAccountId: string;
  creditedAccountId: string;
  accountId_pk: string | null;
  value: number;
}

interface TransactionInfoProps {
  targetName: string;
  value: number;
}

interface UserForExecuteTransactionProps {
  name: string;
  userName: string;
  avatar: string;
}

interface TransactionContextProps {
  transactionInfo: TransactionInfoProps;
  userForExecuteTransaction: UserForExecuteTransactionProps | null;
  transactions: TransactionsProps[] | null;
  fethTransactions: (q?: string) => Promise<void>;
  registerTransactions: (transactions: TransactionsProps[]) => void;
  getUserForTransaction: (targetName: string) => Promise<void>;
  handleSetTransactionInfo: (transactionInfo: TransactionInfoProps) => void;
}

export const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfoProps>({
    targetName: "",
    value: 0,
  });

  const [userForExecuteTransaction, setUserForExecuteTransaction] =
    useState<UserForExecuteTransactionProps | null>(null);
  const [transactions, setTransactions] = useState<TransactionsProps[] | null>(
    null
  );

  function handleSetTransactionInfo({
    targetName,
    value,
  }: TransactionInfoProps) {
    setTransactionInfo({
      targetName,
      value,
    });
  }

  async function fethTransactions(query?: string) {
    const listOfTransactins = await api({
      method: "GET",
      url: `/user/transactions/${query}`,
    })
      .then((response) => {
        return response.data.transactions;
      })
      .catch((error) => {
        console.log("Error while fetch transactons: ", error);
      });

    if (listOfTransactins) setTransactions(listOfTransactins);
  }

  function registerTransactions(transactions: TransactionsProps[]) {
    setTransactions(transactions);
  }

  async function getUserForTransaction(targetName: string) {
    const { user } = await api({
      url: `/user/public/${targetName}`,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    if (user) {
      setUserForExecuteTransaction(user);
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactionInfo,
        handleSetTransactionInfo,
        userForExecuteTransaction,
        registerTransactions,
        getUserForTransaction,
        transactions,
        fethTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
