export default function PageSubTitleComponet(props){
    return (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
            {props.title}
        </h2>
    );
}