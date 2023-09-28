export default function PageTitleComponet(props){
    return (
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            {props.title}
        </h1>
    );
}