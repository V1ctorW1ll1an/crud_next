import type { NextPage } from "next"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Cliente from "../core/Cliente"

const Home: NextPage = () => {
    const clientes = [
        new Cliente("Ana", 34, "1"),
        new Cliente("Bia", 23, "2"),
        new Cliente("Carlos", 45, "3"),
        // new Cliente("Daniel", 67, "4"),
        // new Cliente("Eduardo", 12, "5"),
        // new Cliente("Fabiana", 34, "6"),
        // new Cliente("Gabriel", 23, "7"),
        // new Cliente("Hugo", 45, "8"),
        // new Cliente("Isaac", 67, "9"),
        // new Cliente("Julia", 12, "10"),
    ]

    const selectedClient = (cliente: Cliente) => {
        console.log({ cliente })
    }

    const deletedClient = (cliente: Cliente) => {
        console.log({ cliente })
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout title="Cadastro simples">
                <Table
                    selectClient={selectedClient}
                    deleteClient={deletedClient}
                    clientes={clientes}
                />
            </Layout>
        </div>
    )
}

export default Home
