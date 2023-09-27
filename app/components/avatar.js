export default function Avatar(props) {
    return (
        <div className="flex items-center">
        <img src={props.picture} className="w-12 h-12 rounded-full mr-4" alt={props.name} />
        <div className="text-xl font-bold">{props.name}</div>
        </div>
    )
}

  