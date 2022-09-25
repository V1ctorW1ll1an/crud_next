import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Cliente from "../core/Cliente"
import { IClientRepository } from "../core/IClientRepository"

export const useCliente = () => {
    const [cliente, setCliente] = useState<Cliente>(Cliente.makeEmptyCliente())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visible, setVisible] = useState<"Table" | "Form">("Table")

    const selectedClient = (cliente: Cliente) => {
        console.log({ cliente })
        setCliente(cliente)
        setVisible("Form")
    }

    const newClient = () => {
        setCliente(Cliente.makeEmptyCliente())
        setVisible("Form")
    }

    const deletedClient = (cliente: Cliente) => {
        const repo: IClientRepository = new ClientCollection()
        repo.delete(cliente)
        repo.getAll().then((clientes) => setClientes(clientes))
    }

    const clientChanged = (cliente: Cliente) => {
        const repo: IClientRepository = new ClientCollection()
        repo.saveOrUpdate(cliente)
        repo.getAll().then((clientes) => setClientes(clientes))
        setVisible("Table")
    }

    useEffect(() => {
        const repo: IClientRepository = new ClientCollection()
        repo.getAll().then((clientes) => setClientes(clientes))
    }, [])

    return {
        cliente,
        clientes,
        visible,
        selectedClient,
        newClient,
        deletedClient,
        clientChanged,
        setVisible,
    }
}
