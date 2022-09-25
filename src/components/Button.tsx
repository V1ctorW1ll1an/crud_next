interface IButtonProps {
    children: React.ReactNode | string
    color?: "green" | "blue" | "gray"
    className?: string
    onClick: () => void
}

export default function Button(props: IButtonProps) {
    return (
        <button
            className={`bg-gradient-to-r from-${props.color || "gray"}-400 to-${
                props.color || "gray"
            }-500 text-white px-4 py-2 rounded-md ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
