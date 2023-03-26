import { useContext, useEffect, useState } from "react";

import { api } from "../../../../../services/api";
import FileDownload from "js-file-download";
import { HistoryContainer, HistoryList, Table, Header } from "./styles";
import { dateFormatter, priceFormatter } from "../../../../../utils/formatter";
import { Filter } from "./components/Filter";
import { TransactionContext } from "../../TransactionProvider";
import { AuthContext } from "../../../../../contexts/AuthContext";

export function History() {
  const { transactions, fethTransactions } = useContext(TransactionContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fethTransactions("");
  }, []);

  console.log(transactions);

  return (
    <HistoryContainer>
      <h1>Histórico de transações</h1>
      <Filter />
      <HistoryList>
        {transactions ? (
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>De</th>
                <th>Para</th>
                <th>Valor</th>
                <th>data</th>
                <th>Tipo da transação</th>
                <th>Comprovante</th>
              </tr>
            </thead>
            <tbody>
              {transactions.reverse().map((transaction) => {
                return (
                  <tr key={transaction.id_pk}>
                    <td>{transaction.id_pk}</td>
                    <td>{transaction.debitedAccountId}</td>
                    <td>{transaction.creditedAccountId}</td>
                    <td>{priceFormatter.format(transaction.value)}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                    <td>asldfasdf</td>
                    <td>
                      <button
                        onClick={async () => {
                          await api({
                            method: "GET",
                            url: `/user/transaction/voucher/${transaction.id_pk}`,
                            responseType: "blob",
                          })
                            .then((response) => {
                              FileDownload(response.data, "comprovante.pdf");
                            })
                            .catch((error) => {
                              console.log("Error while download file");
                            });
                        }}
                      >
                        baixar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p>loading...</p>
        )}
      </HistoryList>
    </HistoryContainer>
  );
}
