export default function ExperienceHeaderImage(props){
    return (
        <img src={props.image} className="w-1/4 rounded-full mr-4" alt={props.name}/>
    );
}