import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from "miragejs"

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Frelance Web site",
          type: "deposit",
          category: "Dev",
          amount: 5000,
          createdAt: new Date('2022-09-10 4:32:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 3000,
          createdAt: new Date('2022-10-10 5:42:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
      // return [
      //   {
      //     id: 1,
      //     title: 'transation 1',
      //     amount: 400,
      //     type: "deposit",
      //     category: 'Food',
      //     createdAt: new Date()
      //   }
      // ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      // return data

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
