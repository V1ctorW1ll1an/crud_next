import Cliente from "./Cliente"

export interface IClientRepository {
    saveOrUpdate: (client: Cliente) => Promise<Cliente | undefined>
    delete: (client: Cliente) => Promise<void>
    getAll: () => Promise<Cliente[]>
}
