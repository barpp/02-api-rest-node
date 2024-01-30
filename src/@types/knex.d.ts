// definição de tipos
// eslind-disable-next-line (Informar para o ESLINT para ignorar proximas linhas)
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_id: string
      session_id?: string
    }
  }
}
