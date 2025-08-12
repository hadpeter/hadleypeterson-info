export default function PageSubTitleComponet(props){
    return (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-8 md:pr-8 mt-8">
            {props.title}
        </h2>
    );
}