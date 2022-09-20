interface ITitleProps {
    children?: React.ReactNode
}

export default function Title(props: ITitleProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="p-5 text-2xl">{props.children}</h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}
