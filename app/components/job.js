

export default function Job(props) {

    return (
        <div className="flex items-center">
            <img src={props.image} className="scale-75 w-1/4 h-1/4 mr-4" alt={props.company} />
            <div className="text-xl font-bold">{props.title} at {props.company}</div>
        </div>
    )
}