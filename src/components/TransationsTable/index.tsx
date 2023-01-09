import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { Container } from "./style";

// interface Transaction {
//     id: number;
//     title: string;
//     category: string;
//     type: string;
//     amount: number;
//     createdAt: string;
// }

export function TransationsTable() {
    // const { transactions } = useContext(TransactionsContext);
    const { transactions } = useTransactionsContext()

    // const [transactions, setTransactions] = useState<Transaction[]>([])

    // useEffect(() => {
    //     /*
    //     fetch('http://localhost:3000/api/transactions')
    //     .then(response => response.json)
    //     .then(data => console.log(data))
    //     api.get('/transactions')
    //     .then(response => console.log(response.data))
    //     */
    //     api.get('/transactions')
    //     .then(response => setTransactions(response.data.transactions))
    // }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    
                    {/* <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-$12.000</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Compra notebook</td>
                        <td className="withdraw">-$19.000</td>
                        <td>Compra</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr> */}
                </tbody>
            </table>
        </Container>
    )
}