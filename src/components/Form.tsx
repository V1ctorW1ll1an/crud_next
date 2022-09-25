import { useState } from "react"
import Cliente from "../core/Cliente"
import Button from "./Button"
import Input from "./Input"

interface IFormProps {
    cliente: Cliente
    canceled: () => void
    clientChanged: (cliente: Cliente) => void
}

export default function Form(props: IFormProps) {
    const id = props.cliente?.getId() ?? null
    const [nome, setNome] = useState(props.cliente?.getNome() ?? "")
    const [idade, setIdade] = useState(props.cliente?.getIdade() ?? 0)

    return (
        <div>
            {id && <Input text="Id" value={id} readonly className="mb-4" />}
            <Input text="Nome" value={nome} valueChange={setNome} className="mb-4" />
            <Input text="Idade" type="number" value={idade} valueChange={setIdade} />

            <div className="mt-3">
                <Button
                    className="mr-2"
                    onClick={() => props.clientChanged?.(new Cliente(nome, +idade, id))}
                    color="green"
                >
                    {id ? "Alterar" : "Salvar"}
                </Button>
                <Button onClick={props.canceled} color="gray" className="ml-2">
                    Cancelar
                </Button>
            </div>
        </div>
    )
}
