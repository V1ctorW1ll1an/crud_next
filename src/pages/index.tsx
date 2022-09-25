import type { NextPage } from "next"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import { useCliente } from "../hooks/useCliente"

const Home: NextPage = () => {
    const {
        clientChanged,
        cliente,
        clientes,
        deletedClient,
        newClient,
        selectedClient,
        visible,
        setVisible,
    } = useCliente()

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout title="Cadastro simples">
                {visible === "Table" ? (
                    <>
                        <div className="flex justify-end">
                            <Button className="mb-4" color="blue" onClick={newClient}>
                                Novo cliente
                            </Button>
                        </div>
                        <Table
                            selectClient={selectedClient}
                            deleteClient={deletedClient}
                            clientes={clientes}
                        />
                    </>
                ) : (
                    <Form
                        clientChanged={clientChanged}
                        cliente={cliente}
                        canceled={() => setVisible("Table")}
                    ></Form>
                )}
            </Layout>
        </div>
    )
}

export default Home
