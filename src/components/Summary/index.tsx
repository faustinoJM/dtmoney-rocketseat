import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { useContext } from "react";


export function Summary() {
    // const { transactions } = useContext(TransactionsContext)
    const { transactions } = useTransactionsContext()


    // const totalDeposits = transactions.reduce((acc, transactionn) => {
    //     if(transactionn.type === 'deposit') {
    //         return acc + transactionn.amount;
    //     }

    //     return acc;
    // }, 0)

    const summary = transactions.reduce((acc, transactionn) => {
        if(transactionn.type === 'deposit') {
            acc.deposits += transactionn.amount;
            acc.total += transactionn.amount;
        } else {
            acc.withdraws += transactionn.amount;
            acc.total -= transactionn.amount;
        }
        
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    
    console.log(transactions)
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>
                - 
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)} 
                </strong>
            </div>
        </Container>
    )
}