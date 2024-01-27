export default function JobHighlight(props) {

    return (
        <div>
            <div className="text-xl font-bold">{props.title}, {props.focus}</div>
            <div>{props.date}</div>
        </div>
    )
}