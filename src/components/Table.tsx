import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import Cliente from "../core/Cliente"

interface ITableProps {
    clientes: Array<Cliente>
    selectClient?: (cliente: Cliente) => void
    deleteClient?: (cliente: Cliente) => void
}

export default function Table(props: ITableProps) {
    const renderTableHeader = () => (
        <tr>
            <th className="text-center p-4 ">Id</th>
            <th className="text-center p-4 ">Nome</th>
            <th className="text-center p-4 ">Idade</th>
            {/* render if selectClient or deleteClient has been defined */}
            {(props.selectClient || props.deleteClient) && (
                <th className="text-center p-4 ">Ações</th>
            )}
        </tr>
    )

    const renderClients = () =>
        props.clientes?.map((cliente, i) => (
            <tr key={i} className={i % 2 === 0 ? `bg-purple-200` : `bg-purple-100`}>
                <td className="text-center p-4">{cliente.getId()}</td>
                <td className="text-center p-4">{cliente.getNome()}</td>
                <td className="text-center p-4">{cliente.getIdade()}</td>
                {/* render if selectClient or deleteClient has been defined */}
                {(props.selectClient || props.deleteClient) && (
                    <td className="p-4 flex justify-center">{renderActions(cliente)}</td>
                )}
            </tr>
        ))

    const renderActions = (cliente: Cliente) => (
        <>
            {/* render if selectClient has been defined */}
            {props.selectClient && (
                <button
                    onClick={() => props.selectClient?.(cliente)}
                    className="flex justify-center items-start text-green-500 hover:bg-green-50 rounded-full p-2 m-1"
                >
                    <PencilSquareIcon className="h-6 w-6" />
                </button>
            )}

            {/* render if deleteClient has been defined */}
            {props.deleteClient && (
                <button
                    onClick={() => props.deleteClient?.(cliente)}
                    className="flex justify-center items-start text-red-500 hover:bg-red-50 rounded-full p-2 m-1"
                >
                    <TrashIcon className="h-6 w-6" />
                </button>
            )}
        </>
    )

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
                {renderTableHeader()}
            </thead>
            <tbody>{renderClients()}</tbody>
        </table>
    )
}
