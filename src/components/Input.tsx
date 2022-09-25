import { ChangeEvent } from "react"

interface IInputProps {
    type?: `string` | `number`
    text?: string
    value: any
    readonly?: boolean
    valueChange?: (value: any) => void
    className?: string
}

export default function Input(props: IInputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            {props.text && <label className="mb-4">{props.text}</label>}
            <input
                type={props.type ?? "text"}
                value={props.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => props.valueChange?.(e.target.value)}
                readOnly={props.readonly}
                className="border border-purple-500 rounded-lg focus:outline-none focus:shadow-outline-purple px-4 py-2 mt-2"
            />
        </div>
    )
}
