export default function DoubleListComponent(props){
    var listItems = props.items
    var items = listItems.map(function (i) {
    return (
        <div className="rounded-md outline outline-offset-6 outline-black text-center">
            {i}
        </div>
    );
    });
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-8 mx-4">
                {items}
            </div>
        </div>
    );
}